import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { currencyReducer } from './currency/currencySlice';
import { transactionsReducer } from './Transactions/transactionsSlice';
import { categoriesReducer } from './Categories/categoriesSlice';
import { loadingReducer } from './loadingSlice';

const persistConfig = {
  key: 'api/token',
  version: 1,
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['data'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    currency: persistReducer(currencyPersistConfig, currencyReducer),
    transactions: transactionsReducer,
    categories: categoriesReducer,
    loader: loadingReducer,
  },
  // reducer: {
  //   auth: authReducer,
  // },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
