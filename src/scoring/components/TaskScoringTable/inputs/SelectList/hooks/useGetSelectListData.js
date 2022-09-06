import { useContext, useEffect } from 'react';
import { StoreContext } from '../../../../../hooks/useGetScoringComponentData';
import { changeValueAction, setErrorAction } from '../../actions';
import { addResult, changeResult, setResultsCount } from '../../../../results/actions';

export default function useGetSelectListData(taskIndex, aspectIndex) {
    const { state, dispatch } = useContext(StoreContext);
    const aspectItem = state.criteria.tasks[taskIndex]?.aspects[aspectIndex] || {};
    const { id, value = '', values = {}, required = false, error = false } = aspectItem;
    const { results: resultsState } = state;
    const { results } = resultsState;

    useEffect(() => {
        if (required && value === '') {
            dispatch(setErrorAction({ taskIndex, aspectIndex, error: true }));
        }
    }, [required]);

    const handleSelectListOnChange = (e) => {
        // Handle value attr
        const currentValue = e.target.value;
        if (currentValue === '' && required) {
            dispatch(setErrorAction({ taskIndex, aspectIndex, error: true }));
        } else {
            dispatch(setErrorAction({ taskIndex, aspectIndex, error: false }));
        }
        dispatch(changeValueAction({ taskIndex, aspectIndex, value: currentValue }));

        // Handle results
        const indexOfAspect = results.findIndex((result) => result.id === id);
        if (indexOfAspect !== -1) {
            dispatch(changeResult({ indexOfAspect, result: { id, value: +currentValue } }));
        } else {
            dispatch(addResult({ id, value: +currentValue }));
            required && dispatch(setResultsCount('increment'));
        }
    };

    return { value, values, error, handleSelectListOnChange };
}
