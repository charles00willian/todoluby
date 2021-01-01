import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducers from './persistReducers';
import rootReducers from './modules/rootReducers';

const store = createStore(persistReducers(rootReducers));
const persistor = persistStore(store);

export { store, persistor };
