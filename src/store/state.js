import uuid from 'react-native-uuid'

import { SYNC_STATUS as SS } from '../constants'
import { setRandomId, setRandomUuid, setProfileSync, postingProfileCancel } from "./actions/profile"
import C from "../lib/console";

export const stateBase = {
	dataVersion: 1, // increment if data is incompatible with previous
	errors: [],

	profile : {
		randomUuid: null,
		randomId: null,

		dateOfBirth: null,
		musicTraining: null,
		musicField: null,
		mathTraining: null,
		mathField: null,
		education: null,
		educationOther: null,
		musicListen: null,

		email: null,
		emailFuture: false,

		syncStatus: SS.NOT_SYNCED,
		postingProfile: false,
	},

	currentFeedbackId: null,
	currentPerformanceId: null,

	live: {
		feedbacks: [
			/* e.g. {
				performanceId: 'manchester2017',
				feedbackId: 'wojenfowenf',
				data: [
					{
						ty: 'start',
						ts: 12324567389

					}
				]
			}*/
		],
	},
	post: {
		questions: [
			/* e.g. {
				performanceId: 'manchester2017',
				musicLength: 75 (seconds)

			}*/
		]
	},

	performances : []

};

export const stateSetup = (store) => {

	if( store.getState().profile.randomUuid === null ) {
		// initial
		store.dispatch( setRandomUuid( generateRandomUuid() ));
	}

	if( store.getState().profile.randomId === null ) {
		// initial
		store.dispatch( setRandomId( generateRandomId() ));
	}


	if( store.getState().profile.syncStatus === SS.SYNCING ) {
		// clean-up
		store.dispatch( setProfileSync( SS.NOT_SYNCED ) );
	}

	if( store.getState().profile.postingProfile === true ) {
		// clean-up
		store.dispatch( postingProfileCancel() );
	}

	// TODO: Clear errors
	if( store.getState().errors.length !== 0 ) {
		C.log( store.getState().errors );
	}
};

const generateRandomUuid = () => {
	return uuid.v4();
};

const generateRandomId = () => {
	/*
		Generate an anonymous ID.

		I'd like it to look simple, and by easier to remember,
		 but still unique without being checked against a server.

		 Removed i, j, L, and q, o as they can look the same.
		 Removed AEU to avoid words being generated.
	*/
	const codeLetters = "BCDFGHKMNPRSTVWXYZ";
	const codeLettersLength = codeLetters.length; // 18
	const codeNumbers = "0123456789";
	const codeNumbersLength = codeNumbers.length; // 10

	let id = "";
	id += codeLetters[Math.floor(Math.random()*codeLettersLength)];
	id += codeNumbers[Math.floor(Math.random()*codeNumbersLength)];
	id += codeNumbers[Math.floor(Math.random()*codeNumbersLength)];
	id += "-";
	id += codeLetters[Math.floor(Math.random()*codeLettersLength)];
	id += codeLetters[Math.floor(Math.random()*codeLettersLength)];
	id += codeLetters[Math.floor(Math.random()*codeLettersLength)];

	return id; // e.g. "M42-GXY", about 10 million combinations
};