import React, { Component } from 'react';
import { Text } from "react-native"

import TemplateBase from './templateBase'

export default class Profile extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Profile"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Profile" subTitle="Your details">
				<Text>
					Anonymous identifier: {this.props.id}
				</Text>
			</TemplateBase>
		);
	}
}