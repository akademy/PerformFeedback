const Enum = (obj,typ) => {
	const o = {};
	for( const key of Object.keys(obj) ) {
		o[key] = key;
	}
	return Object.freeze(o);
};

export default Enum;