export const increment = (payload) => {
    return {
        type: "tambah",
        payload:payload
    };
};

export const decrement = (payload) => {
    return {
        type: "kurang",
        payload: payload
    };
};