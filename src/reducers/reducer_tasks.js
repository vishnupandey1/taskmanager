import { SET_TASKS } from '../constant';

function reducer(state = [], action) {
    switch (action.type) {
        case SET_TASKS:
            const { tasks } = action;

            return tasks;
        default:
            return state;
    }
}

export default reducer;