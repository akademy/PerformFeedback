
import React, { Component } from 'react';
import { View, Text } from "react-native"

export default class About extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "About"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'center'
			}}>
				<Text style={{fontSize:20}}>
					All about this App!
				</Text>
				<Text>
					This is some text that explains something
				</Text>
			</View>
		);
	}
}