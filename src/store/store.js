import { compose, createStore, applyMiddleware } from "redux";
import {autoRehydrate} from 'redux-persist'
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { Console, ConsoleDummy } from "../lib/console"

import reducers from './reducers'

let middleware = [thunkMiddleware];
if( __DEV__ ) {
	const loggerMiddleware = createLogger({
		//logger: Console,//ConsoleDummy,//
		collapsed: true,
		colors: {
			title : () => (false),
			prevState : () => (false),
			action : () => (false),
			nextState : () => (false),
			error : () => (false)
		},
		level: {

			prevState : () => (false),
			action : () => ('log'),
			nextState : () => (false),
			error : () => ('log'),

		},
		logErrors: false
	});
	middleware.push(loggerMiddleware);
}

const store = (initialState={}) => createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		autoRehydrate()
	)
);

export default store;