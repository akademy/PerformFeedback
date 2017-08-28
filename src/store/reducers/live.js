import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { combineReducers } from 'redux';

const feedbacks = (state=[],  action) => {
	switch(action.type) {
		case R.ADD_FEEDBACK:
			return [
				...state,
				action.payload
			];

		case R.SET_FEEDBACK_ID:
		case R.SET_FEEDBACK_PERFORMANCE_ID:
		case R.SET_FEEDBACK_SYNC:
		case R.SET_FEEDBACK_DATA:
		case R.POSTING_LIVE:
		case R.POSTING_LIVE_CANCEL:
		case R.POSTING_LIVE_COMPLETE:
			return updateObjectInArray(state, action);

		/*
		case R.ADD_OR_UPDATE_LIVE_FEEDBACK :

			let found = -1;
			for( let i=0, z=state.length; i < z; i++ ) {
				if( state[i].feedbackId === action.payload.feedbackId ) {
					found = i;
					break;
				}
			}

			let newState = state.slice();
			if( found !== -1 ) {
				newState[found].data = action.payload.data;
				newState[found].syncStatus = SS.NOT_SYNCED;
			}
			else {
				newState.push( {
					...action.payload,
					syncStatus: SS.NOT_SYNCED
				} );
			}

			return newState;
		*/

	}

	return state;
};

function updateObjectInArray( array, action ) {
	return array.map( (item) => {
		if(item.feedbackId !== action.id) {
			// This isn't the item we care about - keep it as-is
			return item;
		}

		switch(action.type) {
			// Otherwise, this is the one we want - return an updated value
			case R.SET_FEEDBACK_ID:
				return {
					...item,
					feedbackId: action.payload
				};
			case R.SET_FEEDBACK_PERFORMANCE_ID:
				return {
					...item,
					performanceId: action.payload
				};
			case R.SET_FEEDBACK_SYNC:
				return {
					...item,
					syncStatus: action.payload
				};
			case R.SET_FEEDBACK_DATA:
				return {
					...item,
					data: action.payload,
					syncStatus: SS.NOT_SYNCED
				};

			case R.POSTING_LIVE :
				return {
					...item,
					posting: true
				};
			case R.POSTING_LIVE_CANCEL :
				return {
					...item,
					posting: false
				};
			case R.POSTING_LIVE_COMPLETE:
				return {
					...item,
					posting: false
				};

		}
	});
}

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



export default combineReducers(
	{
		feedbacks,
	}
);