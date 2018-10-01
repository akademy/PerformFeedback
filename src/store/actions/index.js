import { REDUCER as R } from '../../constants'
import C from "../../lib/console";

// These set up the data if needs be, and create a "state changer"


export const setCurrentPerformanceId = (payload) => ({ type: R.SET_CURRENT_PERFORMANCE_ID, payload });
export const setCurrentFeedbackId = (payload) => ({ type: R.SET_CURRENT_FEEDBACK_ID, payload });


export const addError = (message) => {
	C.log( "Adding error: ", message );
	return {
		type: R.ADD_ERROR,
		payload:message
	}
};

export const clearError = (index) => (
	{
		type: R.CLEAR_ERROR,
		payload: index
	}
);