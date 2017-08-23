import { REDUCER as R } from '../../constants'
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

export default combineReducers(
	{
		randomId,
		dateOfBirth
	}
);