import { AsyncStorage } from 'react-native'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import React, { Component } from 'react';

import Router from "./route"
import Store from "./store/store"
import sync from './store/sync'

import { Console as C } from "./console"

import { stateBase, stateSetup } from "./store/state"

const store = Store(stateBase);

const persisterOptions = {
	blacklist: ["profile.postingProfile"],
	storage: AsyncStorage
};

const persister = persistStore( store, persisterOptions , () => {

	C.groupCollapsed("Rehydrate complete");
	C.log("Rehydrate state", store.getState());
	C.groupEnd();

	stateSetup( store );
	sync.check( store );
});

class App extends Component {
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

