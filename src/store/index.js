import { applyMiddleware, createStore} from "redux";
import { createLogger} from "redux-logger";
import { combineReducers } from 'redux';
import { reducer as tasks } from '../tasks';
import { saveToStorageMiddleware, loadState } from './stateStorage';

const persistedState = loadState();

export default createStore(
    combineReducers({
        tasks,
    }),
    persistedState,
    applyMiddleware(
        createLogger(),
        saveToStorageMiddleware,
    ),
);

