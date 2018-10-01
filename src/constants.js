import Enum from './lib/enum';

export const PERFORMANCES = Enum({
	ABBEY       : "abbeyRoadOctober2018",
	OXFORD      : "oxfordJanuary2018",
	MANCHESTER  : "manchester2017",
}, Enum.TYPE.STRING);

export const MODE = Enum({
	SECTION :1,
	PALINDROME :1
});

export const NAVIGATION = Enum({
	HOME :1,
	ABOUT :1,
	LICENCES :1,
	PROFILE :1,
	PERFORMANCE_LOCATION :1,
	PERFORMANCE_BEGIN :1,
	PERFORMANCE_SECTIONS :1,
	PERFORMANCE_FINISH :1,
	QUESTIONS :1,
	QUESTIONS_LOCATION :1
});

export const REDUCER = Enum({

	// Errors
	ADD_ERROR: 1,
	CLEAR_ERROR: 1,

	// Currents
	SET_CURRENT_PERFORMANCE_ID: 1,
	SET_CURRENT_FEEDBACK_ID: 1,

	// Profile
	SET_RANDOM_UUID: 1,
	SET_RANDOM_ID: 1,
	SET_DOB: 1,
	SET_MUSIC_TRAINING: 1,
	SET_MUSIC_FIELD: 1,
	SET_MATH_TRAINING: 1,
	SET_MATH_FIELD: 1,
	SET_EDUCATION: 1,
	SET_EDUCATION_OTHER: 1,
	SET_MUSIC_LISTEN: 1,

	SET_EMAIL  :1,
	SET_EMAIL_FUTURE  :1,

	SET_PROFILE_SYNC: 1,

	POSTING_PROFILE: 1,
	POSTING_PROFILE_COMPLETE: 1,
	POSTING_PROFILE_CANCEL: 1,

	// Live
	ADD_FEEDBACK: 1,

	SET_FEEDBACK_DATA: 1,
	SET_FEEDBACK_ID: 1,
	SET_FEEDBACK_PERFORMANCE_ID: 1,
	SET_FEEDBACK_SYNC: 1,

	POSTING_LIVE: 1,
	POSTING_LIVE_COMPLETE: 1,
	POSTING_LIVE_CANCEL: 1,

	// Post
	ADD_QUESTION: 1,

	SET_QUESTION_MUSIC_LENGTH  :1,
	SET_QUESTION_DESCRIBE  :1,
	SET_QUESTION_INFLUENCES  :1,
	SET_QUESTION_ENJOY  :1,
	SET_QUESTION_FAMILIAR  :1,
	SET_QUESTION_PARTICIPATION  :1,
	SET_QUESTION_MOTIVATION  :1,
	SET_QUESTION_COMMENTS  :1,
	SET_QUESTION_FAMILIAR_PIECE  :1,
	SET_QUESTION_OFTEN  :1,

	SET_QUESTION_PERFORMANCE_ID: 1,
	SET_QUESTION_SYNC: 1,

	POSTING_POST: 1,
	POSTING_POST_COMPLETE: 1,
	POSTING_POST_CANCEL: 1,
});

export const SYNC_STATUS = Enum({
	SYNCED :1,
	NOT_SYNCED :1,
	SYNCING :1
});