export default function resultsReducers(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_RESULT': {
            const stateCopy = { ...state };
            const resultsCopy = [...state.results];
            resultsCopy.push(payload);
            stateCopy.results = resultsCopy;
            return stateCopy;
        }
        case 'REMOVE_RESULT': {
            const stateCopy = { ...state };
            const resultsCopy = [...state.results];
            resultsCopy.splice(payload, 1);
            stateCopy.results = resultsCopy;
            return stateCopy;
        }
        case 'CHANGE_RESULT': {
            const { indexOfAspect, result } = payload;
            const stateCopy = { ...state };
            const resultsCopy = [...state.results];
            resultsCopy.splice(indexOfAspect, 1);
            resultsCopy.push(result);
            stateCopy.results = resultsCopy;
            return stateCopy;
        }
        case 'SET_RESULTS_COUNT': {
            const stateCopy = { ...state };
            if (payload === 'increment') {
                stateCopy.resultsCount += 1;
            }
            if (payload === 'decrement') {
                stateCopy.resultsCount -= 1;
            }
            return stateCopy;
        }
        case 'SET_ALL_RESULTS_COUNT': {
            const stateCopy = { ...state };
            stateCopy.allResultsCount = payload;
            return stateCopy;
        }
        case 'SET_MAXIMUM_POINTS': {
            const stateCopy = { ...state };
            stateCopy.maximumPoints = payload;
            return stateCopy;
        }
        default:
            return state;
    }
}
