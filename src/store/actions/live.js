import uuid from 'react-native-uuid'

import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { setCurrentFeedbackId, addError } from '../actions'
import api from '../../lib/api'

import { Console as C } from "../../console"

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
export const createFeedback = ( performanceId ) => (dispatch, getState) => {
	let feedbackId = uuid.v4();

	performanceId = getState().currentPerformanceId;

	dispatch( addFeedback( { feedbackId: feedbackId } ) );
	dispatch( setFeedbackPerformanceId( performanceId ) );

	dispatch( setCurrentFeedbackId( feedbackId ) );
};

// thunk
export const postLive = (feedbackId) => (dispatch, getState) => {

	const state = getState();

	C.log( 'postLiveFeedback()', feedbackId, state);

	for( let i=0, z=state.live.feedbacks.length; i<z; i++ ) {
		if( !feedbackId || state.live.feedbacks[i].feedbackId === feedbackId ) {
			postLiveFeedback(state.live.feedbacks[i], dispatch, getState);
		}
	}
};


const postLiveFeedback = ( feedbackState, dispatch, getState ) => {

	C.log( 'postLiveFeedback()', feedbackState);

	if( !feedbackState.posting && feedbackState.syncStatus === SS.NOT_SYNCED ) {

		let feedbackId = feedbackState.feedbackId;

		dispatch( postingLive( feedbackId ));
		dispatch( setFeedbackSync( feedbackId, SS.SYNCING ));

		api.fetchHandle( "/api/live/", feedbackState, getState() )
			.then( (data) => {
				const state = getState();
				let updatedFeedback = null;

				for (let i = 0, z = state.live.feedbacks.length; i < z; i++) {
					if (state.live.feedbacks[i].feedbackId === feedbackId) {
						updatedFeedback = state.live.feedbacks[i];
						break;
					}
				}

				//C.log( 'data', data);
				if( data.payload.updated ) {

					if (updatedFeedback.syncStatus === SS.SYNCING) {
						// Only when the data has not changed since we started posting (i.e. syncStatus !== SS.NOT_SYNCED) do we say it is synced
						dispatch( setFeedbackSync( feedbackId, SS.SYNCED ) );
					}
				}
				else {
					// something weird happened...
					dispatch( setFeedbackSync( feedbackId, SS.NOT_SYNCED ) );
				}

				dispatch( postingLiveComplete( feedbackId ) );
			})
			.catch(
				(error) => {
					const state = getState();
					let updatedFeedback = null;

					for (let i = 0, z = state.live.feedbacks.length; i < z; i++) {
						if (state.live.feedbacks[i].feedbackId === feedbackId) {
							updatedFeedback = state.live.feedbacks[i];
							break;
						}
					}

					dispatch( addError( error.message ) );
					dispatch( postingLiveCancel( feedbackId ) );
					dispatch( setFeedbackSync( feedbackId, SS.NOT_SYNCED ) );
				}
			);
	}
};