import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"

import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'
import {NAVIGATION as N} from "../../constants";
import { Console as C } from "../../lib/console"

export default class Performance extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance Live Complete"
	});

	render() {
		const { navigate, goBack } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Performance Live Complete" subTitle="Live performance part complete">
				<View style={{
					//backgroundColor: 'green',
					paddingLeft: 30,
					paddingRight: 30,
					paddingTop: 10,
					flex: 1,
				}}
				>
					<View style={[styles.group]}>
						<Text>Thanks for completing the Section Ends.</Text>
					</View>

					<View style={[styles.group]}>
						<Text>We have some questions about the performance which you can either do now or later</Text>

						<View style={[styles.groupCenter]}>
							<View style={[styles.buttonWrap]}>
								<Button
									style={[styles.button]}
									textStyle={[styles.buttonText]}
									onPress={ () => {navigate(N.QUESTIONS) } }>
									Questions
								</Button>
								<Button
									style={[styles.button]}
									textStyle={[styles.buttonText]}
									onPress={ () => {navigate(N.HOME) } }>
									Home
								</Button>
							</View>
						</View>
					</View>

					<View style={[styles.group]}>
						<Text style={[styles.textSmall]}>Alternatively, if you clicked "Finish" prematurely:</Text>

						<View style={[styles.groupCenter]}>
							<View style={[styles.buttonWrap]}>
							<Button
								style={[styles.button, styles.buttonSmall]}
								textStyle={[styles.buttonText,styles.buttonTextSmall]}
								onPress={ () => { goBack() } }>
								Continue
							</Button>
						</View>
						</View>
					</View>

					<View style={[styles.group]}>
						<Text style={[styles.textSmall]}>Or if you are asked to rerun the test:</Text>

						<View style={[styles.groupCenter]}>
						<View style={[styles.buttonWrap]}>
							<Button
								style={[styles.button, styles.buttonSmall]}
								textStyle={[styles.buttonText,styles.buttonTextSmall]}
								onPress={ () => {navigate(N.PERFORMANCE_BEGIN) } }>
								Rerun
							</Button>
						</View>
						</View>
					</View>

				</View>
			</TemplateBase>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: 'steelblue',
		borderColor: '#4a88b2',
		height: 40
	},
	buttonSmall: {
		height: 30
	},
	textSmall: {
		fontSize:12
	},
	buttonTextSmall:{
		color: '#fff',
		fontSize: 12
	},
	buttonText:{
		color: '#fff',
		fontSize: 14
	},
	group: {
		marginBottom: 10,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	groupCenter: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

	},
	buttonWrap: {
		width: "60%"
	}
});