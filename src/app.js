import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import BackgroundTask from 'react-native-background-task'

import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'


import Router from "./route"
import Store from "./store/store"
import sync from './store/sync'

import { Console as C } from "./lib/console"

import { stateBase, stateSetup } from "./store/state"

const store = Store(stateBase);

const persisterOptions = {
	blacklist: [
		"profile.postingProfile",
		"live.positingLive",
		"errors"
	],
	storage: AsyncStorage
};

BackgroundTask.cancel();
BackgroundTask.define( () => {

	C.log("***** BACKGROUND SYNC START *****");
	sync.check( store )
		.then( C.log("****BACKGROUND SYNC COMPLETE *****") )
		.then( () => {
			setTimeout( ()=> {
				C.log("**** FINISHING *****");
				BackgroundTask.finish();
			}, 1000 );
		});
	}
);

const persister = persistStore( store, persisterOptions , () => {

	C.groupCollapsed("Rehydrate complete");
	//C.log("Rehydrate state", store.getState());
	C.groupEnd();

	stateSetup( store );
	sync.check( store );
});

class App extends Component {

	componentDidMount() {
		BackgroundTask.schedule()
	}

	render() {
		return (
			<Provider store={store}>
				<Router screenProps={ {
					build : this.props.build,
					persister
				} }/>
			</Provider>
		);
	}
}

export default App;

