import { AsyncStorage } from 'react-native'
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import React, { Component } from 'react';

import Router from "./route"
import Store from "./store/store"


const store = Store();

// AsyncStorage.clear();
persistStore(store, {storage: AsyncStorage} );

console.log("state", store.getState() );

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router screenProps={ {build : this.props.build} }/>
			</Provider>
		);
	}
}

export default App;

