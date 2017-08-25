export const NAVIGATION = {
	HOME : "HOME",
	COUNT: "COUNT",
	ABOUT : "ABOUT",
	PROFILE : "PROFILE",
	PERFORMANCE_BEGIN: "PERFORMANCE_BEGIN",
	PERFORMANCE_SECTIONS: "PERFORMANCE_SECTIONS",
	QUESTIONS: "QUESTIONS"
};

export const REDUCER = {
	// Count
	SET_COUNT: "SET_COUNT",
	REQUESTING_COUNT: "REQUESTING_COUNT",
	REQUESTING_COUNT_CANCEL: "REQUESTING_COUNT",
	REQUESTING_COUNT_COMPLETE: "REQUESTING_COUNT",

	// Errors
	ADD_ERROR: "ADD_ERROR",
	CLEAR_ERROR: "CLEAR_ERROR",

	// Profile
	SET_RANDOM_UUID: "SET_RANDOM_UUID",
	SET_RANDOM_ID: "SET_RANDOM_ID",
	SET_DOB: "SET_DOB",

	SET_PROFILE_SYNC: 'SET_PROFILE_SYNC',

	POSTING_PROFILE : "POSTING_PROFILE",
	POSTING_PROFILE_COMPLETE : "POSTING_PROFILE_COMPLETE",
	POSTING_PROFILE_CANCEL : "POSTING_PROFILE_CANCEL",
};

export const SYNC_STATUS = {
	SYNCED : 'SYNCED',
	NOT_SYNCED: 'NOT_SYNCED',
	SYNCING: 'SYNCING'
};