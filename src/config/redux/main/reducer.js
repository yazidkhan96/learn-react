const initialState = {
    counter: 23,
    random: "dqdq",
    acak: "acaks",
    programming: {
        language: "C#",
        framework: ".NET"
    }
}

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case "tambah":
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        case "kurang":
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        default:
            break
    }
    return state;

}

