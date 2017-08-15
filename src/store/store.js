import { compose, createStore, applyMiddleware } from "redux";
import {autoRehydrate} from 'redux-persist'
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from './reducers'

const loggerMiddleware = createLogger();

const store = (initialState: Object={}) => createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(
			thunkMiddleware, loggerMiddleware

		),
		autoRehydrate()
	)
);

export default store;