Perform Feedback App Mobile
===========================

This code will compile a mobile app to both an android and iOS device.

Setup
-----

## Git

Install Git:

	sudo yum install git
	
Checkout this repository

## NPM

Install NPM and then download the packages you'll need

    npm install
    
I'd also install the react-native command line tools globally:

    npm install -g react-native-cli
    
## Setup

You need to setup the config file. Copy the template and fill in the details. The keys must match the server.

    cp src/config/config.local.template.js src/config/config.local.js

## Running

You'll usually want to either use Android Studio or iOS X-Code to compile the React Native app. 

Once you have a simulator running:

    react-native start
    react-native run-android    # or run-ios



