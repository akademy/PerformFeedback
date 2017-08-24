import { SYNC_STATUS as SS } from '../constants'
import {postProfile} from "../store/actions/profile";

let sync = {
	check: ( store ) => {
		if( store.getState().profile.syncStatus === SS.NOT_SYNCED ) {
			store.dispatch( postProfile() )
		}
	}
};

export default sync;