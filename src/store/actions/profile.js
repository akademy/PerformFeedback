import { REDUCER as R } from '../../constants'
import { addError } from '../actions'
import config from '../../config/config'
import api from '../../lib/api'


export const setRandomUuid = (payload) => ({ type: R.SET_RANDOM_UUID, payload });
export const setRandomId = (payload) => ({ type: R.SET_RANDOM_ID, payload });
export const setDOB = (payload) => ({ type: R.SET_DOB, payload });


export const postingProfile = () => ({ type: R.POSTING_PROFILE });
export const postingProfileCancel = () => ({ type: R.POSTING_PROFILE_CANCEL });
export const postingProfileComplete = () => ({ type: R.POSTING_PROFILE_COMPLETE });
// thunk
export const postProfile = () => (dispatch, getState) => {

	const state = getState();

	if( !state.profile.postingProfile ) {

		dispatch(postingProfile());

		let request = api.requestSetup(state.profile.randomUuid);
		request.payload = state.profile;

		fetch(config.local.api.url + "/api/pre/", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( request )
		})
			.then(
				(response) => (
					response.json()
				)
			)
			.then(
				(data) => {
					if( api.responseCheck() ) {
						if ( data.payload.updated ) {
							// TODO: dispatch( profileSync )
						}
					}
					dispatch(postingProfileComplete());
				}
			)
			.catch(
				(error) => {
					dispatch(addError(error.message));
					dispatch(postingProfileCancel());
				}
			);
	}
};