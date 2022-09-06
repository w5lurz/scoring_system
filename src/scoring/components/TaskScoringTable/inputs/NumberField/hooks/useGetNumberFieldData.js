import { useContext, useEffect } from 'react';
import { StoreContext } from '../../../../../hooks/useGetScoringComponentData';
import { changeValueAction, setErrorAction } from '../../actions';
import { addResult, changeResult, setResultsCount } from '../../../../results/actions';

export default function useGetNumberFieldData(taskIndex, aspectIndex) {
    const { state, dispatch } = useContext(StoreContext);
    const aspectItem = state.criteria.tasks[taskIndex]?.aspects[aspectIndex] || {};
    const { id, value = '', required = false, maxValue = 0, error = false } = aspectItem;
    const { results: resultsState } = state;
    const { results } = resultsState;

    useEffect(() => {
        if (required && !value && value !== 0) {
            dispatch(setErrorAction({ taskIndex, aspectIndex, error: true }));
        }
    }, [required]);

    const handleNumberFieldOnChange = (e) => {
        // Handle value attr
        const currentValue = +e.target.value;
        if (currentValue >= 0 && currentValue <= maxValue) {
            dispatch(changeValueAction({ taskIndex, aspectIndex, value: currentValue }));
            if (required && !currentValue && currentValue !== 0) {
                dispatch(setErrorAction({ taskIndex, aspectIndex, error: true }));
            } else {
                dispatch(setErrorAction({ taskIndex, aspectIndex, error: false }));
            }

            // Handle results
            const indexOfAspect = results.findIndex((result) => result.id === id);
            if (indexOfAspect !== -1) {
                dispatch(changeResult({ indexOfAspect, result: { id, value: currentValue } }));
            } else {
                dispatch(addResult({ id, value: currentValue }));
                required && dispatch(setResultsCount('increment'));
            }
        }
    };

    return { value, maxValue, error, handleNumberFieldOnChange };
}
