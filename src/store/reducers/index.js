import { REDUCER as R } from '../../constants'
import { combineReducers } from 'redux'

import profile from './profile'

export const dataVersion = (state=0) => {
	return state;
};

export const count = (state=0, action ) => {
	switch(action.type) {
		case R.SET_COUNT :
			return action.payload;
	}

	return state;
};

export const requestingCount = (state=false, action ) => {
	switch(action.type) {

		case R.REQUESTING_COUNT :
			return true;

		case R.REQUESTING_COUNT_CANCEL :
			return false;

		case R.REQUESTING_COUNT_COMPLETE:
			return false;

	}

	return state;
};

export const errors = (state=[], action) => {

	switch(action.type) {

		case R.ADD_ERROR :
			return [
				...state,
				action.payload
			];

		case R.CLEAR_ERROR :
			return state.filter(
				(message, i) => (
					i !== action.payload
				)
			);
	}
	return state;
};

export default combineReducers(
	{
		dataVersion,
		count,
		requestingCount,
		profile,
		errors
	}
);