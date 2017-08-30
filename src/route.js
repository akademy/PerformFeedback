import React from 'react';
import { StackNavigator } from 'react-navigation';

import { NAVIGATION as N } from './constants'

import Home from "./components/bind/home"
import About from "./components/about"
import Count from "./components/bind/count"
import Profile from "./components/bind/profile"

import Begin from "./components/performance/begin"
import Sections from "./components/performance/bind/sections"
import Finish from "./components/performance/finish"

import Questions from "./components/questions/bind/questions"


const routerSetup = {};
routerSetup[N.HOME] = {
	screen: Home
};
routerSetup[N.COUNT] = {
	screen: Count
};
routerSetup[N.ABOUT] = {
	screen: About
};
routerSetup[N.PROFILE] = {
	screen: Profile
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

// Options for router
const routerOptions = {
	initialRouteName: N.HOME,
};
if( __DEV__ ) {
	routerOptions.initialRouteName = N.HOME;
}

// Main Navigation
const Router = StackNavigator( routerSetup, routerOptions );


export default Router;