import * as actionType from './type'

// User
export const userFetch = (payload) => {
    return {
        type: actionType.userFetch,
        payload:payload
    }
};

export const userSuccess = (payload) => {
    return {
        type: actionType.userSuccess,
        payload:payload
    }
};

export const userFailed = (payload) => {
    return {
        type: actionType.userFailed,
        payload:payload
    }
};

export const userReset = () => {
    return {
        type: actionType.userReset,
    }
};
export const userUpdate = (payload) => {
    return {
        type: actionType.userUpdate,
        payload:payload
    }
};



// User Delete
export const userDeleteFetch = (payload) => {
    return {
        type: actionType.userDeleteFetch,
        payload:payload
    }
};

export const userDeleteSuccess = (payload) => {
    return {
        type: actionType.userDeleteSuccess,
        payload:payload
    }
};

export const userDeleteFailed = (payload) => {
    return {
        type: actionType.userDeleteFailed,
        payload:payload
    }
};

export const userDeleteReset = () => {
    return {
        type: actionType.userDeleteReset,
    }
};
