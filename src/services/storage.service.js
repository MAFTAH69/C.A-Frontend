const CURRENT_USER = 'current_user'
const TOKEN_KEY = 'access_token'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    }
}

const UserService = {
    getCurrentUser() {
        const user = localStorage.getItem(CURRENT_USER) || ''
        return JSON.parse(user)
    },

    saveCurrentUser(currentUser) {
        localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser))
    },

    removeCurrentUser() {
        localStorage.removeItem(CURRENT_USER)
    }
}

export { TokenService, UserService }