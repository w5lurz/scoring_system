import criteriaReducers from './components/TaskScoringTable/reducers';
import resultsReducers from './components/results/reducers';
import errorsReducers from './components/errors/reducers';

export const initialState = {
    criteria: {
        tasks: [],
    },
    results: {
        allResultsCount: 0,
        resultsCount: 0,
        maximumPoints: 0,
        results: [],
    },
    errors: {},
};

const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce(
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state,
    );

const rootReducer = {
    criteria: criteriaReducers,
    results: resultsReducers,
    errors: errorsReducers,
};

export default combineReducers(rootReducer);
