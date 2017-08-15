import React, { Component } from 'react';
import { View, Button, Text } from "react-native"

import TemplateBase from './templateBase'

export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `${screenProps.build} Home (Home)`
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="PerformFeedback" subTitle="Thanks for feeding back">
				<Text style={{fontSize:28}}>Count is {this.props.count}</Text>
				<Button
					title="About"
					onPress={ ()=>{navigate('About')} }
				/>
				<Button
					title="Change Count"
					onPress={ ()=>{navigate('Count')} }
				/>
			</TemplateBase>
		);

	}
}