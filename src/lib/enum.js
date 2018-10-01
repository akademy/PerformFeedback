// Forward declaration
const TYPE = {
	KEY: "KEY",
	STRING : "STRING"
};

const Enum = (obj, typ=TYPE.KEY) => {
	const o = {};
	for( const key of Object.keys(obj) ) {
		if( !typ || typ === TYPE.KEY ) {
			o[key] = key;
		}
		else if( typ === TYPE.STRING ) {
			o[key] = obj[key]; // This just copies it!
		}
	}
	return Object.freeze(o);
};

Enum.TYPE = TYPE;

export default Enum;