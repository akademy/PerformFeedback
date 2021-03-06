import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { addError } from '../actions'
import api from '../../lib/api'

import { Console as C } from "../../lib/console"


export const setRandomUuid = (payload) => ({ type: R.SET_RANDOM_UUID, payload });
export const setRandomId = (payload) => ({ type: R.SET_RANDOM_ID, payload });

export const setDOB = (payload) => ({ type: R.SET_DOB, payload });
export const setMusicTraining = (payload) => ({ type: R.SET_MUSIC_TRAINING, payload });
export const setMusicField = (payload) => ({ type: R.SET_MUSIC_FIELD, payload });
export const setMathTraining = (payload) => ({ type: R.SET_MATH_TRAINING, payload });
export const setMathField = (payload) => ({ type: R.SET_MATH_FIELD, payload });
export const setEducation = (payload) => ({ type: R.SET_EDUCATION, payload });
export const setEducationOther = (payload) => ({ type: R.SET_EDUCATION_OTHER, payload });
export const setMusicListen = (payload) => ({ type: R.SET_MUSIC_LISTEN, payload });

export const setEmail = (payload) => ({ type: R.SET_EMAIL, payload });
export const setEmailFuture = (payload) => ({ type: R.SET_EMAIL_FUTURE, payload });

export const setProfileSync = (payload) => ({ type: R.SET_PROFILE_SYNC, payload });

export const postingProfile = () => ({ type: R.POSTING_PROFILE });
export const postingProfileCancel = () => ({ type: R.POSTING_PROFILE_CANCEL });
export const postingProfileComplete = () => ({ type: R.POSTING_PROFILE_COMPLETE });
// thunk
export const postProfile = () => (dispatch, getState) => {

	C.fun( "postProfile" );

	const state = getState();
	if( state.profile.postingProfile || state.profile.syncStatus !== SS.NOT_SYNCED) {
		C.log( "postProfile:Nothing to do");
		return Promise.resolve( null );
	}

	dispatch( postingProfile() );

	C.log( "postProfile:Fetching");
	return api.fetchHandle( "/api/pre/", state.profile, state )
		.then( (data) => {
			C.log( 'data', data);
			if ( data.payload.updated )  {
				const state = getState();

				if ( state.profile.syncStatus === SS.SYNCING ) {
					// Only when the data has not changed since we started posting (i.e. syncStatus !== SS.NOT_SYNCED) do we say it is synced
					dispatch( setProfileSync( SS.SYNCED ) );
				}
			}
			else {
				// something weird happened...
				dispatch( setProfileSync( SS.NOT_SYNCED ) );
			}

			dispatch( postingProfileComplete() );

			return data;
		})
		.catch(
			(error) => {
				dispatch( addError(error.message) );
				dispatch( setProfileSync( SS.NOT_SYNCED ) );
				dispatch( postingProfileCancel() );

				throw error;
			}
		);
};