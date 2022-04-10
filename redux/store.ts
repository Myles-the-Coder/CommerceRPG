import { configureStore, combineReducers, Reducer } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import userSlice from './userSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	PersistConfig,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig: PersistConfig<any> = {
	key: 'root',
	version: 1,
	storage,
};

const rootReducer: Reducer = combineReducers({
	user: userSlice,
	cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;