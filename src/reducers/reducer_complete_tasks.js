import { SET_COMPLETE_TASKS } from '../constant';

function reducer(state = [], action) {
    switch (action.type) {
        case SET_COMPLETE_TASKS:
            const { tasks } = action;

            return tasks;
        default:
            return state;
    }
}

export default reducer;