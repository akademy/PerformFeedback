import { Platform } from 'react-native'

import uuid from 'react-native-uuid'
//import VersionNumber from 'react-native-version-number';
import config from "../config/config";

let api = {
	requestSetup : ( randomUuid ) => {
		/*
		request: {
			appOs: OS System
			appVersion: current app version,
			key: server generate uuid,
			randomUuid: app generate uuid,
			requestId: request generated uuid,
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

			payload : null
		};

		return request;
	},

	responseCheckStatus: ( response ) => {
		if (response.status < 200 && response.status >= 300) {
			let error = new Error(response.statusText);
			error.response = response;
			throw error;
		}

		return response;
	},

	responseCheckValid : ( responseJson, requestId ) => {
		if( responseJson.responseId !== requestId ) {
			let error = new Error( "Response not valid" );
			error.response = responseJson;
		}
		return responseJson;
	},

	responseJson: ( response ) => ( response.json() ),

	fetchHandle: ( apiPath, data, state ) => {

		let request = api.requestSetup( state.profile.randomUuid );
		request.payload = data;

		return fetch(config.local.api.url + apiPath, { //"/api/pre/", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( request )
		})
		.then( api.responseCheckStatus )
		.then( api.responseJson )
		.then( (responseJson) => {
			console.log('responseJson', responseJson);
			return api.responseCheckValid(responseJson, request.requestId)
		})
	}
};

export default api;