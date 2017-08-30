import { REDUCER as R, SYNC_STATUS as SS } from '../../constants'
import { combineReducers } from 'redux';

const questions = (state=[],  action) => {
	switch(action.type) {
		case R.ADD_QUESTION:
			return [
				...state,
				action.payload
			];

		case R.SET_QUESTION_MUSIC_LENGTH:
		case R.SET_QUESTION_DESCRIBE:
		case R.SET_QUESTION_INFLUENCES:
		case R.SET_QUESTION_ENJOY:
		case R.SET_QUESTION_FAMILIAR:
		case R.SET_QUESTION_PARTICIPATION:
		case R.SET_QUESTION_MOTIVATION:
		case R.SET_QUESTION_COMMENTS:
		case R.SET_QUESTION_PERFORMANCE_ID:

		case R.SET_QUESTION_SYNC:

		case R.POSTING_POST:
		case R.POSTING_POST_CANCEL:
		case R.POSTING_POST_COMPLETE:
			return updateObjectInArray(state, action);
	}

	return state;
};

function updateObjectInArray( array, action ) {
	return array.map( (item) => {
		if(item.performanceId !== action.id) {
			// This isn't the item we care about - keep it as-is
			return item;
		}

		switch(action.type) {
			// Otherwise, this is the one we want - return an updated value

			case R.SET_QUESTION_MUSIC_LENGTH:
				return {
					...item,
					musicLength: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_DESCRIBE:
				return {
					...item,
					describe: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_INFLUENCES:
				return {
					...item,
					influences: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_ENJOY:
				return {
					...item,
					enjoy: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_FAMILIAR:
				return {
					...item,
					familiar: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_PARTICIPATION:
				return {
					...item,
					participation: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_MOTIVATION:
				return {
					...item,
					motivation: action.payload,
					syncStatus: SS.NOT_SYNCED
				};
			case R.SET_QUESTION_COMMENTS:
				return {
					...item,
					comments: action.payload,
					syncStatus: SS.NOT_SYNCED
				};

			case R.SET_QUESTION_SYNC:
				return {
					...item,
					syncStatus: action.payload
				};

			case R.POSTING_POST :
				return {
					...item,
					posting: true
				};
			case R.POSTING_POST_CANCEL :
				return {
					...item,
					posting: false
				};
			case R.POSTING_POST_COMPLETE:
				return {
					...item,
					posting: false
				};

		}
	});
}


export default combineReducers(
	{
		questions,
	}
);