import { REDUCER as R } from '../../constants'
import fetch from 'fetch-everywhere'
import config from '../../config/config'

// These set up the data if needs be, and create a "state changer"

export const setCount = (count) => {
	if( count < 0 ) {
		count = 0;
	}

	return {
		type: R.SET_COUNT,
		payload: count
	}
};

export const requestingCount = () => ({ type: R.REQUESTING_COUNT });
export const requestingCountCancel = () => ({ type: R.REQUESTING_COUNT_CANCEL });
export const requestingCountComplete = () => ({ type: R.REQUESTING_COUNT_COMPLETE });

// thunk
export const requestCount = () => (dispatch/*, getState*/) => {

	dispatch( requestingCount() );

	fetch( config.local.api.url + "/test/count" )
		.then(
			(response) => (
				response.json()
			)
		)
		.then(
			(data) => {
				dispatch( requestingCountComplete() );
				dispatch( setCount( data.count ) );
			}
		)
		.catch(
			(error) => {
				dispatch( addError( error.message ) );
				dispatch( requestingCountCancel() );
			}
		);
};

export const addError = (message) => (
	{
		type: R.ADD_ERROR,
		payload: message
	}
);

export const clearError = (index) => (
	{
		type: R.CLEAR_ERROR,
		payload: index
	}
);
