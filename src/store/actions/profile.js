import { REDUCER as R } from '../../constants'

// These set up the data if needs be, and create a "state changer"

export const setRandomId = (id) => {

	return {
		type: R.SET_RANDOM_ID,
		payload: id
	}
};

export const setDOB = (dob) => {

	return {
		type: R.SET_DOB,
		payload: dob
	}
};