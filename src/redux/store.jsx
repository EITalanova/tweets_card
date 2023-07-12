import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import { usersReducer } from './usersSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const usersPersistConfig = {
  key: 'users',
  storage,
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer)
  },
  middleware,
});

export const persistor = persistStore(store);
