import React, { Component } from 'react'
import { Text } from "react-native"

import TemplateBase from '../templateBase'

export default class Performance extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance Location"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Performance Location" subTitle="Where are you?">
				<Text>
					TODO...
				</Text>
			</TemplateBase>
		);
	}
}