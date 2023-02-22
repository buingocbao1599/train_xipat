const initState = 0;

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "active":
            return state = 1;
        case "disable":
            return state = 0;
        default:
            return state
    }
}

export default rootReducer;