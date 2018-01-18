import uuid from 'react-native-uuid'

import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { setCurrentFeedbackId, addError } from '../actions'
import api from '../../lib/api'

import { Console as C } from "../../lib/console"

export const addFeedback = (payload) => ({ type: R.ADD_FEEDBACK, payload });

export const setFeedbackPerformanceId = (id, payload) => ({ type: R.SET_FEEDBACK_PERFORMANCE_ID, id, payload });
export const setFeedbackSync = (id, payload) => ({ type: R.SET_FEEDBACK_SYNC, id, payload });
export const setFeedbackData = (id, payload) => ({ type: R.SET_FEEDBACK_DATA, id, payload });

export const postingLive = (id) => ({ type: R.POSTING_LIVE, id });
export const postingLiveCancel = (id) => ({ type: R.POSTING_LIVE_CANCEL, id });
export const postingLiveComplete = (id) => ({ type: R.POSTING_LIVE_COMPLETE, id });

/*export const liveFeedback = (payload, id) => ({ type: R.ADD_OR_UPDATE_LIVE_FEEDBACK, payload });

export const setLiveSync = (payload, id) => ({ type: R.SET_LIVE_SYNC, payload });

export const postingLive = (payload, id) => ({ type: R.POSTING_LIVE, id });
export const postingLiveCancel = (id) => ({ type: R.POSTING_LIVE_CANCEL, id });
export const postingLiveComplete = (id) => ({ type: R.POSTING_LIVE_COMPLETE, id });
*/

// thunk
export const createFeedback = () => (dispatch, getState) => {
	const feedbackId = uuid.v4(),
		performanceId = getState().currentPerformanceId;

	dispatch( addFeedback( { feedbackId } ) );
	dispatch( setFeedbackPerformanceId( feedbackId, performanceId ) );

	dispatch( setCurrentFeedbackId( feedbackId ) );

	return feedbackId;
};

// thunk
export const postLive = (feedbackId) => (dispatch, getState) => {

	C.fun( 'postLive()');

	// Todo: We should throttle this, although in most situations there should be very few of them.
	const state = getState();

	let promiseList = [];
	for( let i=0, z=state.live.feedbacks.length; i<z; i++ ) {
		if( !feedbackId || state.live.feedbacks[i].feedbackId === feedbackId ) {
			promiseList.push( postLiveFeedback(state.live.feedbacks[i], dispatch, getState) );
		}
	}

	return Promise.all( promiseList );
};


const postLiveFeedback = ( feedbackState, dispatch, getState ) => {

	const feedbackId = feedbackState.feedbackId;

	C.fun( 'postLiveFeedback()', "feedbackId:", feedbackId);

	if( feedbackState.posting || feedbackState.syncStatus !== SS.NOT_SYNCED ) {
		C.log( '- Nothing to do' );
		return Promise.resolve(null);
	}


	C.log( '- Fetching' );

	dispatch( postingLive( feedbackId ));
	dispatch( setFeedbackSync( feedbackId, SS.SYNCING ));

	return api.fetchHandle( "/api/live/", feedbackState, getState() )
		.then( (data) => {
			const state = getState();
			let updatedFeedback = feedbackFromId( state.live.feedbacks, feedbackId);

			if( updatedFeedback ) { // It's possible it may have been deleted (if all app data deleted) but unlikely.
				if (data.payload.updated) {

					if (updatedFeedback.syncStatus === SS.SYNCING) {
						// Only when the data has not changed since we started posting (i.e. syncStatus !== SS.NOT_SYNCED) do we say it is synced
						dispatch(setFeedbackSync(feedbackId, SS.SYNCED));
					}
				}
				else {
					// something weird happened...
					dispatch(setFeedbackSync(feedbackId, SS.NOT_SYNCED));
				}

				dispatch(postingLiveComplete(feedbackId));
			}

			return data;
		})
		.catch(
			(error) => {
				dispatch( addError( error.message ) );
				dispatch( setFeedbackSync( feedbackId, SS.NOT_SYNCED ) );

				dispatch( postingLiveCancel( feedbackId ) );

				throw error;
			}
		);
};

const feedbackFromId = ( feedbacks, id ) => {
	for (let i = 0, z = feedbacks.length; i < z; i++) {
		if (feedbacks[i].feedbackId === id) {
			return feedbacks[i];

		}
	}
	return null;
};