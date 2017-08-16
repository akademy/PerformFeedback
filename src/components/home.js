import React, { Component } from 'react';
import { View, Button, Text } from "react-native"

import TemplateBase from './templateBase'
import { NAVIGATION as N } from '../constants'

export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: `${screenProps.build} Home (Home)`
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="PerformFeedback" subTitle="Thanks for feeding back">
				<View style={{
					backgroundColor: 'steelblue',
					padding:50,
					flex: 1
				}}
				>
					<Button
						title="About"
						onPress={ ()=>{navigate(N.ABOUT)} }
					/>
					<Button
						title="Profile"
						onPress={ ()=>{navigate(N.PROFILE)} }
					/>
					<Button
						title="Performance"
						onPress={ ()=>{navigate(N.PERFORMANCE)} }
					/>

					{/*<Text style={{fontSize:28}}>Count is {this.props.count}</Text>
					<Button
						title="Change Count"
						onPress={ ()=>{navigate(N.COUNT)} }
					/>*/}
				</View>
			</TemplateBase>
		);

	}
}