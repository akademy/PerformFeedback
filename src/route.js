import React from 'react';
import { StackNavigator } from 'react-navigation';

import { NAVIGATION as N } from './constants'

import Home from "./components/bind/home"
import About from "./components/about"
import Count from "./components/bind/count"
import Profile from "./components/profile"
import Performance from "./components/performance"

import Questions from "./components/questions/questions"


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
routerSetup[N.PERFORMANCE] = {
	screen: Performance
};
routerSetup[N.QUESTIONS] = {
	screen: Questions
};
// Main Navigation
const Router = StackNavigator( routerSetup );


export default Router;