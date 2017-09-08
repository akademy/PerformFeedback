const configLocal = {
	api: {
		key : /\s/,  // e.g. 00000000-0000-4000-0000-00000000000
		url: /\s/,  // e.g. 'http://127.0.0.1:40080'
		devUrl: /\s/  // e.g. 'http://127.0.0.1:40080'
	}
};

if( __DEV__ ) {
	configLocal.api.url = configLocal.api.devUrl;
}

export default configLocal;