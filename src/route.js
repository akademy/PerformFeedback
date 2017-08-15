import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from "./components/bind/home"
import About from "./components/about"
import Count from "./components/bind/count"

// Main Navigation
const Router = StackNavigator({
	Home: {
		screen: Home,
		//navigationOptions: ({navigation, screenProps}) => ({
		//	title: `${screenProps.build} Home (StackNavigator)`,
		//}),
	},
	Count: {
		screen: Count
	},
	About: {
		screen: About
	}
});


export default Router;