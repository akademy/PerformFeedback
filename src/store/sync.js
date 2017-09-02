import { SYNC_STATUS as SS } from '../constants'
import {postProfile} from "../store/actions/profile";
import {postLive} from "../store/actions/live";
import {postPost} from "./actions/post";

import C from "../lib/console";

let sync = {
	check: ( store ) => {
		const state = store.getState(); // Just the initial state used here, we don't fetch again

		C.fun("api.check()");

		//checkProfile( state, store.dispatch );
		//checkFeedbacks( state, store.dispatch );

		Promise.all([
			checkProfile( state, store.dispatch ),
			checkFeedbacks( state, store.dispatch ),
			checkQuestions( state, store.dispatch )
		])
		.then( () => { C.log("ALL synced!")})
		.catch( () => { C.log("ALL synced with errors")} );

		//return Promise.all([
		//checkProfile( state, store.dispatch ).catch(),
		//checkFeedbacks( state, store.dispatch ).catch(),
		//checkQuestions( state, store.dispatch ).catch()
		//]);
	}
};

const checkProfile = ( state, dispatch ) => {
	// Profile
	if( state.profile.syncStatus === SS.NOT_SYNCED ) {
		return dispatch(
			postProfile()
		)
		.then( (result) => {
			C.log("Profile in then()");
			if( result ) {
				C.log("Did something");
			}
			else {
				C.log("Didn't do anything");
			}
		})
		.catch( () => {
			C.log("Profile in error");
		});
	}

	return Promise.resolve( null );
};

const checkFeedbacks = ( state, dispatch ) => {
	// Feedbacks
	let feedbacksSync = SS.SYNCED;
	for( let i=0, z=state.live.feedbacks.length; i<z; i++ ) {
		if( state.live.feedbacks[i].syncStatus === SS.NOT_SYNCED ) {
			feedbacksSync = SS.NOT_SYNCED;
			break;
		}
	}

	if( feedbacksSync === SS.NOT_SYNCED ) {
		return dispatch( postLive() )
			.then( (result) => {
				C.log("Feedbacks in then()");
				if( result ) {
					C.log("Did something");
				}
				else {
					C.log("Didn't do anything")
				}
			})
			.catch( () => {
				C.log("Feedbacks in error");
			});
	}

	return Promise.resolve( null );
};

const checkQuestions = ( state, dispatch ) => {
	// Questions
	let QuestionsSync = SS.SYNCED;
	for( let i=0, z=state.post.questions.length; i<z; i++ ) {
		if( state.post.questions[i].syncStatus === SS.NOT_SYNCED ) {
			QuestionsSync = SS.NOT_SYNCED;
			break;
		}
	}

	if( QuestionsSync === SS.NOT_SYNCED ) {
		return dispatch( postPost() )
			.then( (result) => {
				C.log("Questions in then()");
				if( result ) {
					C.log("Did something");
				}
				else {
					C.log("Didn't do anything")
				}
			})
			.catch( () => {
				C.log("Questions in error");
			});
	}

	return Promise.resolve( null );
};


export default sync;