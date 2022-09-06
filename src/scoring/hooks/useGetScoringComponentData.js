import { createContext, useEffect, useReducer, useState } from 'react';
import rootReducer, { initialState } from '../reducers';
import { fetchTasks } from '../actions';
import { addError, removeError } from '../components/errors/actions';
import { setAllResultsCount, setMaximumPoints } from '../components/results/actions';
import useIsMounted from './useIsMounted';

export const StoreContext = createContext({ state: initialState, dispatch: {} });
const StoreProvider = StoreContext.Provider;

export default function useGetScoringComponentData(inputData) {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const [activeTab, setActiveTab] = useState(0);
    const [isErrorsDialogOpen, setIsErrorsDialogOpen] = useState(false);
    const isMounted = useIsMounted();
    const { criteria } = state;

    const fillHelperPoints = (tasks) => {
        let allResultsCount = 0;
        let maximumPoints = 0;
        tasks.forEach((task) => {
            task.aspects.forEach((aspect) => {
                const { required = false, type } = aspect;
                if (required) {
                    allResultsCount++;
                    if (type === 'number') {
                        maximumPoints += aspect.maxValue;
                    }
                    if (type === 'list') {
                        maximumPoints += Math.max(...Object.values(aspect.values));
                    }
                }
            });
        });
        dispatch(setAllResultsCount(allResultsCount));
        dispatch(setMaximumPoints(maximumPoints));
    };

    const handleErrors = () => {
        criteria.tasks.forEach((task, index) => {
            task.aspects.forEach((aspect) => {
                // If aspect is required and has no value add error
                if (aspect.required && !aspect.value && aspect.value !== 0) {
                    dispatch(addError({ id: aspect.id, taskIndex: index, taskName: task.name, aspectName: aspect.name }));
                } else {
                    dispatch(removeError(aspect.id));
                }
            });
        });
    };

    useEffect(() => {
        if (isMounted) {
            // First render
            // Should be a valid fetch so we emulate here
            const initialTasks = inputData.tasks || [];
            dispatch(fetchTasks(initialTasks));
            fillHelperPoints(initialTasks);
            handleErrors();
        } else {
            // Subsequent renders
            handleErrors();
        }
    }, [criteria.tasks]);

    const handleOnTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    return { state, dispatch, StoreProvider, activeTab, setActiveTab, isErrorsDialogOpen, setIsErrorsDialogOpen, handleOnTabChange };
}
