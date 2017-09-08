import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from "react-native"

import Icon from 'react-native-vector-icons/Entypo';

import TemplateBase from '../templateBase'
import {NAVIGATION as N} from "../../constants";

import {changePathAndNavigate} from "../../route"

export default class Performance extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance",
	});

	render() {
		const { navigate, goBack  } = this.props.navigation;
		const navigationState = this.props.navigation.state;

		return (
			<TemplateBase
				icon="note"
				mainTitle="Performance Complete"
				subTitle="Live performance part complete">
				<View style={{
					//backgroundColor: 'green',
					paddingLeft: 30,
					paddingRight: 30,
					paddingTop: 10,
					flex: 1,
				}}
				>
					<View style={[styles.group]}>
						<Text>Thanks for completing the Section Ends. {"\n"}(Press Back if you finished prematurely.)</Text>
					</View>

					<View style={[styles.group]}>
						<Text style={{marginBottom:10}}>
							We have some questions about the performance which you can answer now or later.
						</Text>

						<View style={[styles.groupCenter]}>
							<View style={[styles.buttonWrap]}>
							<Icon.Button
								style={[styles.button]}
								backgroundColor={styles.button.backgroundColor}
								name="text-document-inverted"
								size={styles.buttonIcon.height}
								color="#fff"
								iconStyle={[styles.buttonIcon]}
								onPress={ () => {
									changePathAndNavigate( this.props.navigation, [N.HOME, N.QUESTIONS] );
								}}
							>
								<Text style={[styles.buttonText]}>Questions on Performance</Text>
							</Icon.Button>
							</View>

							<View style={[styles.buttonWrap]}>
								<Icon.Button
									style={[styles.button]}
									backgroundColor={styles.button.backgroundColor}
									name="home"
									size={styles.buttonIcon.height}
									color="#fff"
									iconStyle={[styles.buttonIcon]}
									onPress={ () => {
										changePathAndNavigate( this.props.navigation, [N.HOME] );
									}}
								>
									<Text style={[styles.buttonText]}>Home</Text>
								</Icon.Button>
							</View>

						</View>
					</View>

					<View style={[styles.group]}>
						<Text style={{marginBottom:10}}>If you are asked to rerun the test press here:</Text>

						<View style={[styles.groupCenter]}>
							<View style={[styles.buttonWrap]}>
							<Icon.Button
								style={[styles.button]}
								backgroundColor={styles.button.backgroundColor}
								name="note"
								size={styles.buttonIcon.height}
								color="#fff"
								iconStyle={[styles.buttonIcon]}
								onPress={ () => {
									changePathAndNavigate( this.props.navigation, [N.HOME, N.PERFORMANCE_BEGIN]);
								}}
							>
								<Text style={[styles.buttonText]}>Rerun</Text>
							</Icon.Button>
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
		backgroundColor: '#4094dd',
		borderRadius: Platform.OS === "android" ? 0 : 3 , /* Bug in android stops borders working */
		borderBottomWidth: 5,
		borderBottomColor: '#157efb',
		height:45,
		marginBottom: 0
	},
	buttonDisabled: {
		backgroundColor: '#bbb'
	},
	buttonWrap: {
		marginBottom:10,
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


	//button: {
	//	backgroundColor: 'steelblue',
	//	borderColor: '#4a88b2',
	//	height: 40
	//},
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
	//buttonText:{
	//	color: '#fff',
	//	fontSize: 14
	//},
	group: {
		marginBottom: 30,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	groupCenter: {
		/*display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',*/

	}
});