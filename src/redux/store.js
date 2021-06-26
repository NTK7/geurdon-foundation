import userReducer from './reducers/userReducer';
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';

// whitelist and blacklist are properties of react redux which allows user to select which reducer needs to be persisted and which not to
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'],
};

const rootReducer = combineReducers({
	user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducer, composeWithDevTools());
export let persister = persistStore(store);
