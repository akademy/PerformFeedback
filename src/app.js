import { AsyncStorage } from 'react-native'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import React, { Component } from 'react';

import Router from "./route"
import Store from "./store/store"
import { Console as C } from "./console"

import { stateBase, stateSetup } from "./store/state"

const store = Store(stateBase);

const persister = persistStore(store, {storage: AsyncStorage} , () => {
	const state = store.getState();

	C.groupCollapsed("Rehydration complete");
	C.log("Rehydrated state", state);
	C.groupEnd();

	stateSetup( state, store );
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

