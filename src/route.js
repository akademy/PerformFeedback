import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';

import { NAVIGATION as N } from './constants'

import Home from "./screens/home/bind/home"
import About from "./screens/about/about"
import Licences from "./screens/about/licences"
import Profile from "./screens/profile/bind/profile"

import LocationPerformance from "./screens/performance/bind/location"
import Begin from "./screens/performance/bind/begin"
import Sections from "./screens/performance/bind/sections"
import Finish from "./screens/performance/finish"

import LocationQuestions from "./screens/questions/bind/locationQ"
import Questions from "./screens/questions/bind/questions"

export const changePathAndNavigate = ( navigation, routeList, index ) => {
	let actions = [];
	for( let i=0, z=routeList.length; i<z; i++ ) {
		actions.push( NavigationActions.navigate({ routeName: routeList[i] }), )
	}
	const resetAction = NavigationActions.reset({
		index: (index !== undefined) ? index : actions.length-1,
		actions
	});
	navigation.dispatch(resetAction);
};

const routerSetup = {};
routerSetup[N.HOME] = {
	screen: Home
};
routerSetup[N.ABOUT] = {
	screen: About
};
routerSetup[N.LICENCES] = {
	screen: Licences
};
routerSetup[N.PROFILE] = {
	screen: Profile
};
routerSetup[N.PERFORMANCE_LOCATION] = {
	screen: LocationPerformance
};
routerSetup[N.PERFORMANCE_BEGIN] = {
	screen: Begin
};
routerSetup[N.PERFORMANCE_SECTIONS] = {
	screen: Sections
};
routerSetup[N.PERFORMANCE_FINISH] = {
	screen: Finish
};

routerSetup[N.QUESTIONS] = {
	screen: Questions
};
routerSetup[N.QUESTIONS_LOCATION] = {
	screen: LocationQuestions
};

// Options for router
const routerOptions = {
	initialRouteName: N.HOME,
	navigationOptions: {
		headerTintColor: 'steelblue',
	}
};
if( __DEV__ ) {
	routerOptions.initialRouteName = N.HOME;
}

// Main Navigation
const Router = StackNavigator( routerSetup, routerOptions );


export default Router;