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

const musicTraining = (state=null,  action) => {
	switch(action.type) {
		case R.SET_MUSIC_TRAINING :
			return action.payload;
	}

	return state;
};

const musicField = (state=null,  action) => {
	switch(action.type) {
		case R.SET_MUSIC_FIELD :
			return action.payload;
	}

	return state;
};

const mathTraining = (state=null,  action) => {
	switch(action.type) {
		case R.SET_MATH_TRAINING :
			return action.payload;
	}

	return state;
};

const mathField = (state=null,  action) => {
	switch(action.type) {
		case R.SET_MATH_FIELD :
			return action.payload;
	}

	return state;
};

const education = (state=null,  action) => {
	switch(action.type) {
		case R.SET_EDUCATION :
			return action.payload;
	}

	return state;
};

const educationOther = (state=null,  action) => {
	switch(action.type) {
		case R.SET_EDUCATION_OTHER :
			return action.payload;
	}

	return state;
};

const musicListen = (state=null,  action) => {
	switch(action.type) {
		case R.SET_MUSIC_LISTEN :
			return action.payload;
	}

	return state;
};

const email = (state=null,  action) => {
	switch(action.type) {
		case R.SET_EMAIL :
			return action.payload;
	}

	return state;
};

const emailFuture = (state=null,  action) => {
	switch(action.type) {
		case R.SET_EMAIL_FUTURE :
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
		case R.SET_MUSIC_TRAINING:
		case R.SET_MUSIC_FIELD:
		case R.SET_MATH_TRAINING:
		case R.SET_MATH_FIELD:
		case R.SET_EDUCATION:
		case R.SET_EDUCATION_OTHER:
		case R.SET_MUSIC_LISTEN:
		case R.SET_EMAIL:
		case R.SET_EMAIL_FUTURE:


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
		musicTraining,
		musicField,
		mathTraining,
		mathField,
		education,
		educationOther,
		musicListen,

		email,
		emailFuture,

		syncStatus,
		postingProfile
	}
);