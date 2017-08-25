import React, { Component } from 'react'
import {Button, StyleSheet, Text, View} from "react-native"

import { DialogComponent, SlideAnimation, DialogContent, DialogButton }from 'react-native-dialog-component';

import TemplateBase from '../templateBase'

export default class Performance extends Component {

	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Sections"
	});

	state = { sections: "● ● ● ● ● ●"}

	// noinspection JSUnusedGlobalSymbols
	componentDidMount = () => {
	};

	render() {
		const { navigate } = this.props.navigation;

		return (

			<TemplateBase mainTitle="Performance" subTitle="Watching a performance">
				<Text style={{textAlign:'center'}}>{this.state.sections}</Text>
				<View style={{flex:1,padding: 20}}>
					<Button
						onPress={ () => {} }
						title="Add section"
					/>
				</View>
			</TemplateBase>
		);
	}
}


const styles = StyleSheet.create({
	dialogText: {
		textAlign: 'center',
		paddingBottom:10
	},
	dialogTitle: {
		fontWeight: 'bold',
		textAlign: 'center',
		paddingBottom:10
	},
	text: {
		textAlign: 'center',
		paddingBottom:10
	}
});