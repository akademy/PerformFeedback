import uuid from 'react-native-uuid'

import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { addError } from '../actions'
import api from '../../lib/api'

import { Console as C } from "../../lib/console"

export const addQuestion = (payload) => ({ type: R.ADD_QUESTION, payload });

export const setQuestionComments = (id, payload) => ({ type: R.SET_QUESTION_COMMENTS, id, payload });
export const setQuestionDescribe = (id, payload) => ({ type: R.SET_QUESTION_DESCRIBE, id, payload });
export const setQuestionEnjoy = (id, payload) => ({ type: R.SET_QUESTION_ENJOY, id, payload });
export const setQuestionFamiliar = (id, payload) => ({ type: R.SET_QUESTION_FAMILIAR, id, payload });
export const setQuestionInfluences = (id, payload) => ({ type: R.SET_QUESTION_INFLUENCES, id, payload });
export const setQuestionMotivation = (id, payload) => ({ type: R.SET_QUESTION_MOTIVATION, id, payload });
export const setQuestionMusicLength = (id, payload) => ({ type: R.SET_QUESTION_MUSIC_LENGTH, id, payload });
export const setQuestionParticipation = (id, payload) => ({ type: R.SET_QUESTION_PARTICIPATION, id, payload });

export const setQuestionSync = (id, payload) => ({ type: R.SET_QUESTION_SYNC, id, payload });

export const postingPost = (id) => ({ type: R.POSTING_POST, id });
export const postingPostCancel = (id) => ({ type: R.POSTING_POST_CANCEL, id });
export const postingPostComplete = (id) => ({ type: R.POSTING_POST_COMPLETE, id });

// thunk
export const createQuestion = () => (dispatch, getState) => {
	const performanceId = getState().currentPerformanceId;

	dispatch( addQuestion( { performanceId } ) );
};

// thunk
export const postPost = (performanceId) => (dispatch, getState) => {
	C.fun( 'postPost()');

	// Todo: We should throttle this, although in most situations there should be very few of them.
	const state = getState();

	let promiseList = [];
	for( let i=0, z=state.post.questions.length; i<z; i++ ) {
		if( !performanceId || state.post.questions.performanceId === performanceId ) {
			promiseList.push( postPostQuestions(state.post.questions[i], dispatch, getState) );
		}
	}

	return Promise.all( promiseList );
};


const postPostQuestions = ( questionState, dispatch, getState ) => {

	const performanceId = questionState.performanceId;

	C.fun( 'postPostQuestion()', "performanceId", performanceId);

	if( questionState.posting || questionState.syncStatus !== SS.NOT_SYNCED ) {
		C.log( '- Nothing to do' );
		return Promise.resolve(null);
	}


	C.log( '- Fetching' );

	dispatch( postingPost( performanceId ));
	dispatch( setQuestionSync( performanceId, SS.SYNCING ));

	return api.fetchHandle( "/api/post/", questionState, getState() )
		.then( (data) => {
			const state = getState();
			let updatedQuestion = questionFromPerformanceId(state.post.questions, performanceId );

			if( updatedQuestion ) { // It's possible it may have been deleted (if all app data deleted) but unlikely.

				if (data.payload.updated) {

					if (updatedQuestion.syncStatus === SS.SYNCING) {
						// Only when the data has not changed since we started posting (i.e. syncStatus !== SS.NOT_SYNCED) do we say it is synced
						dispatch(setQuestionSync(performanceId, SS.SYNCED));
					}
				}
				else {
					// something weird happened...
					dispatch(setQuestionSync(performanceId, SS.NOT_SYNCED));
				}

				dispatch(postingPostComplete(performanceId));
			}

			return data;
		})
		.catch(
			(error) => {
				const state = getState();

				dispatch( addError( error.message ) );
				dispatch( postingPostCancel( performanceId ) );
				dispatch( setQuestionSync( performanceId, SS.NOT_SYNCED ) );

				throw error;
			}
		);
};

const questionFromPerformanceId = ( questions, performanceId ) => {
	for (let i = 0, z = questions.length; i < z; i++) {
		if (questions[i].performanceId === performanceId) {
			return questions[i];
		}
	}
	return null;
};