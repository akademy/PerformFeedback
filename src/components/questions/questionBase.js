import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"

//import Icon from 'react-native-vector-icons/Entypo';

export default class QuestionBase extends Component {

	render() {

		return (
			<View style={{
				flex: 1
			}}>
				<View style={[styles.question]}>
					<Text style={[styles.label]}>{this.props.title}</Text>
					<Text style={[styles.questionText]}>{this.props.text}</Text>
					{this.props.children}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	group: {
		marginBottom: 15
	},
	label: {
		fontWeight: "bold",
		marginBottom: 10,
	},
	question: {
		marginBottom: 30,
		flex: 1,
		borderBottomColor: 'steelblue',
		borderBottomWidth: 4,
		paddingBottom: 40,
	},
	questionText: {
		paddingTop: 10,
		paddingBottom: 20
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 5
	},


	button: {
		backgroundColor: '#4094dd',
		height:45,
		borderWidth: 0,
		borderBottomWidth: 5,
		borderBottomColor: '#157efb',
	},
	buttonDisabled: {
		backgroundColor: '#bbb'
	},
	buttonIcon: {
		height: 20,
		color: '#0e2d70'
	},
	buttonIconDisabled: {
		color: '#777'
	},
	buttonText: {
		color: '#fff',
		fontSize: 16
	},
	buttonTextDisabled: {
		color: '#fff'
	},
});