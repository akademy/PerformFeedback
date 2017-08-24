import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { combineReducers } from 'redux'

const randomUuid = (state=null,  action) => {
	switch(action.type) {
		case R.SET_RANDOM_UUID :
			return action.payload;
	}

	return state;
};

const randomId = (state=null,  action) => {
	switch(action.type) {
		case R.SET_RANDOM_ID :
			return action.payload;
	}

	return state;
};

const dateOfBirth = (state=null,  action) => {
	switch(action.type) {
		case R.SET_DOB :
			return action.payload;
	}

	return state;
};

export const syncStatus = (state=false, action ) => {

	switch(action.type) {

		case R.POSTING_PROFILE :
			return SS.SYNCING;

		case R.SET_DOB:
		case R.SET_RANDOM_ID:
		case R.SET_RANDOM_UUID:
		case R.POSTING_PROFILE_CANCEL :
			return SS.NOT_SYNCED;

		case R.POSTING_PROFILE_COMPLETE:
			return state;

		case R.SET_PROFILE_SYNC:
			return action.payload;

	}

	return state;
};

export const postingProfile = (state=false, action ) => {
	switch(action.type) {

		case R.POSTING_PROFILE :
			return true;

		case R.POSTING_PROFILE_CANCEL :
			return false;

		case R.POSTING_PROFILE_COMPLETE:
			return false;

	}

	return state;
};


export default combineReducers(
	{
		randomUuid,
		randomId,
		dateOfBirth,

		syncStatus,
		postingProfile
	}
);