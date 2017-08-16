import React, { Component } from 'react';
import { Text } from "react-native"

import TemplateBase from './templateBase'

export default class About extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "About"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="About" subTitle="All about this app!">
				<Text>
					About this app
				</Text>
				<Text>
					Privacy statement
				</Text>
				<Text>
					Contributors
				</Text>
			</TemplateBase>
		);
	}
}