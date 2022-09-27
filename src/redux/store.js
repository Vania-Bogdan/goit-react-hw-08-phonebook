import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts-slice';
import filterSlice from './filter/filter-slice';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'token',
    storage,
    whiteList: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsSlice,
        filter: filterSlice,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);