import { ApiService } from './api.service.js'
import { TokenService } from './storage.service.js'
import User from '@/models/user.js'
// import axios from 'axios'

class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.stack = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService. 
     * 
     * @returns access_token
     * @throws AuthenticationError 
    **/
    async login(username, password) {
           const requestData = {
               method: 'post',
               url: 'login',
               data: {
                   reg_number: username,
                   password: password
               },
               auth: {
                   username: process.env.VUE_APP_CLIENT_ID,
                   password: process.env.VUE_APP_CLIENT_SECRET
               }
           }

        try {         
               console.log(requestData.data);
               const response = await ApiService.customRequest(requestData)

               TokenService.saveToken(response.data.access_token)
               ApiService.setHeaders()

               localStorage.setItem('auth_user',JSON.stringify(response.data.user))

               User.insert({ data: response.data.users })
            
               return response.data.access_token

        } catch (error) {
            console.log(error.status);
            throw new AuthenticationError(error.response.status, error.response.data)
        }
    },

    /**
      * Logout the current user by removing the token from storage. 
      * 
      * Will also remove `Authorization Bearer <token>` header from future requests.
     **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        ApiService.removeHeaders()
        localStorage.removeItem('auth_user')
    }
}

export default UserService

export { UserService, AuthenticationError }