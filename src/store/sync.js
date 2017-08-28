import { SYNC_STATUS as SS } from '../constants'
import {postProfile} from "../store/actions/profile";
import {postLive} from "../store/actions/live";

let sync = {
	check: ( store ) => {
		const state = store.getState();

		// Profile
		if( state.profile.syncStatus === SS.NOT_SYNCED ) {
			store.dispatch( postProfile() )
		}

		// Feedbacks
		let feedbackSync = SS.SYNCED;

		for( let i=0, z=state.live.feedbacks.length; i<z; i++ ) {
			if( state.live.feedbacks[i].syncStatus === SS.NOT_SYNCED ) {
				feedbackSync = SS.NOT_SYNCED;
				break;
			}
		}

		if( feedbackSync === SS.NOT_SYNCED ) {
			store.dispatch( postLive() );
		}

	}
};

export default sync;