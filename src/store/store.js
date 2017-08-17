import { compose, createStore, applyMiddleware } from "redux";
import {autoRehydrate} from 'redux-persist'
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from './reducers'

let middleware = [thunkMiddleware];
if( __DEV__ ) {
	const loggerMiddleware = createLogger();
	middleware.push(loggerMiddleware);
}

const store = (initialState: Object={}) => createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		autoRehydrate()
	)
);

export default store;