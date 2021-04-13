import * as actionType from './type'

export const updateToken = (payload) => {
    return {
        type: actionType.updateToken,
        payload: payload
    }
}

export const loginFetch = (payload) => {
    return {
        type: actionType.loginFetch,
        payload: payload
    }
}

export const loginSuccess = (payload) => {
    return {
        type: actionType.loginSuccess,
        payload
    }
}

export const loginFailed = (payload) => {
    return {
        type: actionType.loginFailed,
        payload: payload
    }
}

export const loginReset = () => {
    return {
        type: actionType.loginReset,
    }
}