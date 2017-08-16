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
			<TemplateBase mainTitle="Profile" subTitle="Your details">
				<Text>
					This is some text that explains something
				</Text>
			</TemplateBase>
		);
	}
}