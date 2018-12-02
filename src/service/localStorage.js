export default class LocalStorage {
    static getItem(key) {
        const lsValue = localStorage.getItem(key);

        return JSON.parse(lsValue);
    }

    static setItem(key, value) {
        const adaptedValue = JSON.stringify(value);

        return localStorage.setItem(key, adaptedValue);
    }
}