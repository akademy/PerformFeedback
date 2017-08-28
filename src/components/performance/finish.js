import React, { Component } from 'react'
import { Button, Text } from "react-native"

import TemplateBase from '../templateBase'
import {NAVIGATION as N} from "../../constants";
import { Console as C } from "../../console"

export default class Performance extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance Location"
	});

	render() {
		const { navigate, goBack } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Performance Location" subTitle="Where are you?">
				<Text>
					You finished.
					Did you mean too? Maybe you could go back...
				</Text>
				<Button title="Continue?" onPress={ () => { goBack() } }/>
				<Button title="Rerun from start" onPress={ () => {navigate(N.PERFORMANCE_BEGIN) } }/>
			</TemplateBase>
		);
	}
}
