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

	responseCheck : ( response, requestId ) => {
		return response.responseId = requestId;
	}
};

export default api;