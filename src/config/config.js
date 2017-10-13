import configLocal from './config.local'

const config = {
	local: configLocal,
	version: "1.0.3", // Note this is NOT connect to Android's (android/app/build.gradle) or iOS's (ios/PRiSMPerceptionApp/Info.plist) version number
};

export default config;