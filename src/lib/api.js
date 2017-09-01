import { Platform } from 'react-native'

import uuid from 'react-native-uuid'
//import VersionNumber from 'react-native-version-number';
import config from "../config/config";
import { Console as C } from "./console"

let api = {
	requestPrepare : (randomUuid ) => {
		/*
		request: {
			appOs: OS System
			appVersion: current app version,

			key: server generate uuid,

			randomUuid: app generate uuid,

			requestId: request generated uuid,
			requestDateTime: (new Date()).toISOString(),
		};
		result: {
			resultId: must match requestId,
		};
		*/
		let request = {
			appOs: Platform.OS, // 'ios' or 'android'
			appVersion: "0.0.1", // TODO: VersionNumber.appVersion + "." + VersionNumber.buildVersion,

			key: config.local.api.key,

			randomUuid,

			requestId: uuid.v4(),
			requestDateTime: (new Date()).toISOString(),

			payload : null
		};

		return request;
	},

	responseCheckStatus: ( responseJson ) => {

		if (responseJson.status < 200 || responseJson.status >= 300) {

			let errorText =
				"Unknown error on server, status: " + responseJson.status;

			if (responseJson.title) {
				errorText = responseJson.title;
			}

			const error = new Error(errorText);
			error.status = responseJson.status;
			throw error;
		}

		return responseJson;
	},

	responseCheckValid : ( responseJson, requestId ) => {
		C.log("responseCheckValid");
		if( !responseJson.responseId || responseJson.responseId !== requestId ) {
			const error = new Error( "Response not valid" );
			error.response = responseJson;
			throw error;
		}
		return responseJson;
	},

	responseJson: ( response ) => ( response.json() ),

	fetchHandle: ( apiPath, data, state ) => {

		let request = api.requestPrepare( state.profile.randomUuid );
		request.payload = data;

		return fetch(config.local.api.url + apiPath, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( request )
		})
		.then( api.responseJson )
		.then( api.responseCheckStatus )
		.then( (responseJson) => {
			return api.responseCheckValid(responseJson, request.requestId)
		})
		//.catch( (error) => {
		//	throw error;
		//})
	}
};

export default api;