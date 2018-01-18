import { REDUCER as R } from '../../constants'
import { combineReducers } from 'redux'

import profileReducers from './profile'
import liveReducers from './live'
import postReducers from './post'

export const dataVersion = (state=0) => {
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

export const performances = (state=[]) => {
	return [
		{
			key:"oxfordJanuary2018",
			title:"Music and Maths",
			date: "27 January, 2018"
		},
		{
			key:"manchester2017",
			title:"PRiSM Perception App World Premiere",
			date: "04 October, 2017"
		}
	];
};

export default combineReducers(
	{
		dataVersion,
		currentPerformanceId,
		currentFeedbackId,
		profile : profileReducers,
		live: liveReducers,
		post: postReducers,
		errors,
		performances
	}
);