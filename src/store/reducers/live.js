import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { combineReducers } from 'redux'

const feedbacks = (state=[],  action) => {
	switch(action.type) {
		case R.ADD_OR_UPDATE_LIVE_FEEDBACK :
			let found = -1;
			for( let i=0, z=state.length; i < z; i++ ) {
				if( state[i].feedbackId === action.payload.feedbackId ) {
					found = i;
				}
			}

			let newState = state.slice();
			if( found !== -1 ) {
				newState[found].data = action.payload.data;
			}
			else {
				newState.push( action.payload );
			}

			return newState;

	}

	return state;
};

export const syncStatus = (state=false, action ) => {

	switch(action.type) {

		case R.POSTING_LIVE :
			return SS.SYNCING;

		case R.ADD_OR_UPDATE_LIVE_FEEDBACK:
		case R.POSTING_LIVE_CANCEL :
			return SS.NOT_SYNCED;

		case R.POSTING_LIVE_COMPLETE:
			return state;

		case R.SET_LIVE_SYNC:
			return action.payload;

	}

	return state;
};

export const postingLive = (state=false, action ) => {
	switch(action.type) {

		case R.POSTING_LIVE :
			return true;

		case R.POSTING_LIVE_CANCEL :
			return false;

		case R.POSTING_LIVE_COMPLETE:
			return false;

	}

	return state;
};


export default combineReducers(
	{
		feedbacks,

		syncStatus,
		postingLive
	}
);