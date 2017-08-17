import {setRandomId} from "./actions/profile";

export const stateBase = {
	dataVersion: 1, // increment if data is incompatible with previous
	count: 0,
	requestingCount: false,
	errors: [],

	profile : {
		randomId: null
	}
};

export const stateSetup = (state, store) => {
	if( state.profile.randomId === null ) {
		store.dispatch( setRandomId( generateRandomId() ));
	}
};

const generateRandomId = () => {
	/*
		Generate an anonymous ID.

		I'd like it to look simple, and by easier to remember,
		 but still unique with being checked against a server.

		 Removed i, j, L, q and o as they look the same.
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