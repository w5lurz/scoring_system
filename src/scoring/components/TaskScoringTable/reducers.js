export default function criteriaReducers(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'FETCH_TASKS': {
            const stateCopy = { ...state };
            // Fill errors for every aspect before first renders
            const tasksWithErrors = payload.map((task) => {
                const taskCopy = { ...task };
                const newAspects = taskCopy.aspects.map((aspect) => {
                    const aspectCopy = { ...aspect };
                    aspectCopy.error = aspectCopy.required || false;
                    return aspectCopy;
                });
                taskCopy.aspects = newAspects;
                return taskCopy;
            });
            stateCopy.tasks = tasksWithErrors;
            return stateCopy;
        }
        case 'TICK_CHECKBOX': {
            const { taskIndex, aspectIndex, checked } = payload;
            const stateCopy = { ...state };
            const tasksCopy = [...stateCopy.tasks];
            const taskCopy = { ...tasksCopy[taskIndex] };
            const aspectsCopy = [...taskCopy.aspects];
            const aspectCopy = { ...aspectsCopy[aspectIndex] };
            aspectCopy.checked = checked;

            aspectsCopy[aspectIndex] = aspectCopy;
            taskCopy.aspects = aspectsCopy;
            tasksCopy[taskIndex] = taskCopy;
            stateCopy.tasks = tasksCopy;
            return stateCopy;
        }
        case 'CHANGE_VALUE': {
            const { taskIndex, aspectIndex, value } = payload;
            const stateCopy = { ...state };
            const tasksCopy = [...stateCopy.tasks];
            const taskCopy = { ...tasksCopy[taskIndex] };
            const aspectsCopy = [...taskCopy.aspects];
            const aspectCopy = { ...aspectsCopy[aspectIndex] };
            aspectCopy.value = value;

            aspectsCopy[aspectIndex] = aspectCopy;
            taskCopy.aspects = aspectsCopy;
            tasksCopy[taskIndex] = taskCopy;
            stateCopy.tasks = tasksCopy;
            return stateCopy;
        }
        case 'SET_ERROR': {
            const { taskIndex, aspectIndex, error } = payload;
            const stateCopy = { ...state };
            const tasksCopy = [...stateCopy.tasks];
            const taskCopy = { ...tasksCopy[taskIndex] };
            const aspectsCopy = [...taskCopy.aspects];
            const aspectCopy = { ...aspectsCopy[aspectIndex] };
            aspectCopy.error = error;

            aspectsCopy[aspectIndex] = aspectCopy;
            taskCopy.aspects = aspectsCopy;
            tasksCopy[taskIndex] = taskCopy;
            stateCopy.tasks = tasksCopy;
            return stateCopy;
        }
        default:
            return state;
    }
}
