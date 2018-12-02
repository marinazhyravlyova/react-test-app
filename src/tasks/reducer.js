import {
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from './actionTypes';

let id = 0;
const getId = () => id++;

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
