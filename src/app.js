import { AsyncStorage } from 'react-native'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import React, { Component } from 'react';

import Router from "./route"
import Store from "./store/store"

import { stateBase, stateSetup } from "./store/state"

const store = Store(stateBase);

const persister = persistStore(store, {storage: AsyncStorage} , () => {
	const state = store.getState();

	console.groupCollapsed("Rehydration complete");
	console.log("Rehydrated state", state );
	console.groupEnd();

	stateSetup( state, store );
});

const purge =  false;//true;//
if( purge ) {
	console.warn("*** Purging persistance store ***" );
	persister.purge();
}



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

