import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import city from '../reducers/city';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['city']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, 
        composeWithDevTools(
            applyMiddleware(thunk, logger)))

export const persistor = persistStore(store);