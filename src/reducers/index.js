import { combineReducers } from 'redux';
import tasks from './reducer_tasks';
import user from './reducer_user';
import completeTasks from './reducer_complete_tasks';

export default combineReducers({ user, tasks, completeTasks });