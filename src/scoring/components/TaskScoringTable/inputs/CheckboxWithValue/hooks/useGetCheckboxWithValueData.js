import { useContext } from 'react';
import { StoreContext } from '../../../../../hooks/useGetScoringComponentData';
import { tickCheckboxAction } from '../../actions';
import { addResult, removeResult } from '../../../../results/actions';

export default function useGetCheckboxWithValueData(taskIndex, aspectIndex) {
    const { state, dispatch } = useContext(StoreContext);
    const aspectItem = state.criteria.tasks[taskIndex]?.aspects[aspectIndex] || {};
    const { id, value = 0, checked = false } = aspectItem;
    const { results: resultsState } = state;
    const { results } = resultsState;

    const handleCheckboxOnChange = (e) => {
        // Handle checked attr
        const isChecked = e.target.checked;
        dispatch(tickCheckboxAction({ taskIndex, aspectIndex, checked: isChecked }));

        // Handle results
        const indexOfAspect = results.findIndex((result) => result.id === id);
        if (indexOfAspect !== -1 && !isChecked) {
            dispatch(removeResult(indexOfAspect));
        } else {
            dispatch(addResult({ id, value }));
        }
    };

    return { checked, handleCheckboxOnChange };
}
