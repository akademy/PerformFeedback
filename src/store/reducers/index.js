import { REDUCER as R } from '../../constants'
import { combineReducers } from 'redux'

import profileReducers from './profile'
import liveReducers from './live'
import postReducers from './post'

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

export const currentPerformanceId = (state=null, action ) => {
	switch(action.type) {
		case R.SET_CURRENT_PERFORMANCE_ID :
			return action.payload;
	}

	return state;
};

export const currentFeedbackId = (state=null, action ) => {
	switch(action.type) {
		case R.SET_CURRENT_FEEDBACK_ID :
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
		currentPerformanceId,
		currentFeedbackId,
		profile : profileReducers,
		live: liveReducers,
		post: postReducers,
		errors
	}
);