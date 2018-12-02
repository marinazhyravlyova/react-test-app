import LocalStorage from '../service/localStorage';

export const APP_STATE_KEY = 'APP_STATE_KEY';

export const saveToStorageMiddleware = ({ getState }) => next => action => {
    const nextState = next(action);

    try {
        LocalStorage.setItem(APP_STATE_KEY, getState());
    } catch (error) {
        console.log(error);
    }

    return nextState;
};

export const loadState = () => {
    try {
        return LocalStorage.getItem(APP_STATE_KEY);
    } catch (error) {
        console.log(error);
    }

    return null;
};