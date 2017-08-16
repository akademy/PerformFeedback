import React, { Component } from 'react';
import { Text } from "react-native"

import TemplateBase from '../templateBase'

export default class Questions extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Questions"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="About" subTitle="All about this app!">
				<Text>
					Questions available yet?
				</Text>
			</TemplateBase>
		);
	}
}