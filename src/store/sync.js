import { SYNC_STATUS as SS } from '../constants'
import {postProfile} from "../store/actions/profile";
import {postLive} from "../store/actions/live";
import {postPost} from "./actions/post";

let sync = {
	check: ( store ) => {
		const state = store.getState(); // Just the initial state used here, we don't fetch again

		// Profile
		if( state.profile.syncStatus === SS.NOT_SYNCED ) {
			store.dispatch( postProfile() );
		}


		// Feedbacks
		let feedbacksSync = SS.SYNCED;
		for( let i=0, z=state.live.feedbacks.length; i<z; i++ ) {
			if( state.live.feedbacks[i].syncStatus === SS.NOT_SYNCED ) {
				feedbacksSync = SS.NOT_SYNCED;
				break;
			}
		}

		if( feedbacksSync === SS.NOT_SYNCED ) {
			store.dispatch( postLive() );
		}


		// Questions
		let QuestionsSync = SS.SYNCED;
		for( let i=0, z=state.post.questions.length; i<z; i++ ) {
			if( state.post.questions[i].syncStatus === SS.NOT_SYNCED ) {
				QuestionsSync = SS.NOT_SYNCED;
				break;
			}
		}

		if( QuestionsSync === SS.NOT_SYNCED ) {
			store.dispatch( postPost() );
		}

	}
};

export default sync;