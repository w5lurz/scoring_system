export const addResult = (payload) => ({
    type: 'ADD_RESULT',
    payload,
});

export const removeResult = (payload) => ({
    type: 'REMOVE_RESULT',
    payload,
});

export const changeResult = (payload) => ({
    type: 'CHANGE_RESULT',
    payload,
});

export const setAllResultsCount = (payload) => ({
    type: 'SET_ALL_RESULTS_COUNT',
    payload,
});

export const setResultsCount = (payload) => ({
    type: 'SET_RESULTS_COUNT',
    payload,
});

export const setMaximumPoints = (payload) => ({
    type: 'SET_MAXIMUM_POINTS',
    payload,
});
