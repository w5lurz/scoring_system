export default function errorsReducers(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_ERROR': {
            const stateCopy = { ...state };
            stateCopy[payload.id] = payload;
            return stateCopy;
        }
        case 'REMOVE_ERROR': {
            const stateCopy = { ...state };
            delete stateCopy[payload];
            return stateCopy;
        }
        default:
            return state;
    }
}
