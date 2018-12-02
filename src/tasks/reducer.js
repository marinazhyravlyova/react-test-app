import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from './actionTypes';
import LocalStorage from '../service/localStorage';

const initialId = 0;
const getId = () => {
    let id;
    try {
        id = LocalStorage.getItem('TASK_ID');

        if (!id) {
            id = initialId;
        }
    } catch (error) {
        id = initialId;
    }

    LocalStorage.setItem('TASK_ID', id + 1);

    return id + 1;
};

const initialState = {
    taskList: []
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                taskList: [
                    ...state.taskList, {
                        id: getId(),
                        ...action.task,
                    },
                ],
            };
        }

        case EDIT_TASK: {
            return {
                ...state,
                taskList: (state.taskList || []).map(task => {
                    if (task.id === action.task.id) {
                        return action.task;
                    }

                    return task;
                }),
            };
        }

        case DELETE_TASK: {
            return {
                ...state,
                taskList: (state.taskList || []).filter(({id}) => id !== action.task.id),
            };
        }

        default: {
            return state;
        }
    }
};

export default tasksReducer;
