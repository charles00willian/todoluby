import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer } from 'redux-persist';
import { Action, Reducer } from 'redux';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistReducers = (reducers: Reducer<unknown, Action<any>>) => {
  const persistedReducer = persistReducer(
    {
      key: '@lubytodo',
      storage,
      whitelist: ['tasklist'],
    },
    reducers
  );

  return persistedReducer;
};

export default persistReducers;