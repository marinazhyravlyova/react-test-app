import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from './actionTypes'

export const addTask = (task) => ({ type: ADD_TASK, task });

export const editTask = (task) => ({ type: EDIT_TASK, task });

export const deleteTask = (task) => ({ type: DELETE_TASK, task });
