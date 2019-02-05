import { SIGNED_IN, SET_TASKS, SET_COMPLETE_TASKS } from '../constant';

export const logUser = email => {
    return {
        type: SIGNED_IN,
        email
    };
}

export const setTasks = tasks => {
    return {
        type: SET_TASKS,
        tasks
    }
}

export const setCompleteTasks = tasks => {
    return {
        type: SET_COMPLETE_TASKS,
        tasks
    }
}
