import React, { Component } from 'react';
import { View, Text } from "react-native"

import TemplateBase from './templateBase'

export default class Profile extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Profile"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Profile" subTitle="Your details">
				<View style={{
					//backgroundColor: 'red',
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: 30
				}}
				>
					<Text>
						Anonymous identifier: {this.props.id}
					</Text>
				</View>
			</TemplateBase>
		);
	}
}