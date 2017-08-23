/*import { REDUCER as R } from '../../constants'
import { combineReducers } from 'redux'

const initial = {
	dataVersion: 1, // increment if data is incompatible with previous
	randomId: null
};

const dataVersion = (state=initial.dataVersion) => {
	return state;
};

const randomId = (state=initial.randomId) => {
	if( state === null ) {

		const codeLetters = "ABCDEFGHKMNPRSTUVWXYZ"; // removed i, j, L, q and O
		const codeLettersLength = codeLetters.length;
		const codeNumbers = "0123456789";
		const codeNumbersLength = codeNumbers.length;

		let id = "";
		id += codeLetters[Math.floor(Math.random()*codeLettersLength)];
		id += codeNumbers[Math.floor(Math.random()*codeNumbersLength)];
		id += codeNumbers[Math.floor(Math.random()*codeNumbersLength)];
		id += "-";
		id += codeLetters[Math.floor(Math.random()*codeLettersLength)];
		id += codeLetters[Math.floor(Math.random()*codeLettersLength)];
		id += codeLetters[Math.floor(Math.random()*codeLettersLength)];

		return id; // e.g. "M42-GXY", about 20 million combinations
	}
	return state;
};

export default combineReducers(
	{
		dataVersion,
		randomId
	}
);
*/