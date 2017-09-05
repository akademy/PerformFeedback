import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"

import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'
import {NAVIGATION as N} from "../../constants";
import { Console as C } from "../../lib/console"
import {changePathAndNavigate} from "../../route"

export default class Performance extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance Live Complete",
	});

	render() {
		const { navigate, goBack  } = this.props.navigation;
		const navigationState = this.props.navigation.state;

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
									onPress={ () => {
										changePathAndNavigate( this.props.navigation, [N.HOME, N.QUESTIONS] );
									}}>
									Questions
								</Button>
								<Button
									style={[styles.button]}
									textStyle={[styles.buttonText]}
									onPress={ () => {
										changePathAndNavigate( this.props.navigation, [N.HOME] );
									}}>
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
								onPress={ () => {
									C.log(navigationState,navigationState.params);
									if( navigationState.params.navigateWithBack ) {
										navigationState.params.navigateWithBack();
										// TODO: Fix other back button... maybe don't stop timer until componentWillUnmount called
									}
									goBack();
								} }>
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
								onPress={ () => {
									changePathAndNavigate( this.props.navigation, [N.HOME, N.PERFORMANCE_BEGIN]);
								} }>
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