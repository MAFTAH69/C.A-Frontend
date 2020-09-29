import { TokenService } from '../../services/storage.service.js'
import { UserService, AuthenticationError } from '../../services/user.service.js'
import router from '@/router'

const state = {
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: ''
}

const getters = {
    loggedIn: (state) => {
        return state.accessToken ? true : false
    },
    authenticationErrorCode: (state) => {
        return state.authenticationErrorCode
    },
    authenticationError: (state) => {
        return state.authenticationError
    },
    authenticating: (state) => {
        return state.authenticating
    }
}

const actions = {
    async login({ commit }, credentials) {
        commit('loginRequest')

        try {
            const token = await UserService.login(credentials.username, credentials.password)
            commit('loginSuccess', token)

            router.push('/home')

            return true
        } catch (e) {
            if (e instanceof AuthenticationError) {
                commit('loginError', { errorCode: e.stack, errorMessage: e.message })
            }
            return false
        }
    },

    logout({ commit }) {
        UserService.logout()
        commit('logoutSuccess')
        router.push({path:'/'})
        // location.reload
    }

}

const mutations = {
    loginRequest: (state) => {
        state.authenticating = true
        state.authenticationErrorCode = 0
        state.authenticationError = ''
    },
    loginSuccess: (state, accessToken) => {
        state.accessToken = accessToken
        state.authenticating = false
    },
    loginError: (state, {errorCode, errorMessage}) => {
        state.authenticating = false
        state.authenticationErrorCode = errorCode
        state.authenticationError = errorMessage
    },
    logoutSuccess: (state) => {
        state.accessToken = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}