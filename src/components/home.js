import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from "react-native"
import ButtonApsl from 'apsl-react-native-button'

import TemplateBase from './templateBase'
import { NAVIGATION as N } from '../constants'
import { Console as C } from "../lib/console"

import Icon from 'react-native-vector-icons/Entypo';

export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		//title: `${screenProps.build} Home (Home)`
		title: "Home" + (__DEV__ ? " __DEV__" : "")
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase
				mainTitle="PRiSM Perception App"
				subTitle="Feedback during performances"
			>
				<View style={{
					//backgroundColor: 'green',
					padding:50,
					flex: 1,
				}}
				>
					<View style={{
						height:250, // Divide the buttons into this space
					}}
					>
						<View style={{
							//backgroundColor: 'red',
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
						>

							<Icon.Button
								style={[styles.button]}
								backgroundColor={styles.button.backgroundColor}
								name="info"
								size={styles.buttonIcon.height}
								color="#fff"
								iconStyle={[styles.buttonIcon]}
								onPress={ () => {
									navigate(N.ABOUT);
								}}
							>
								<Text style={[styles.buttonText]}>About this app</Text>
							</Icon.Button>

							<Icon.Button
								style={[styles.button]}
								backgroundColor={styles.button.backgroundColor}
								name="user"
								size={styles.buttonIcon.height}
								color="#fff"
								iconStyle={[styles.buttonIcon]}
								onPress={ () => {
									navigate(N.PROFILE);
								}}
							>
								<Text style={[styles.buttonText]}>Your profile</Text>
							</Icon.Button>

							<Icon.Button
								style={[styles.button]}
								backgroundColor={styles.button.backgroundColor}
								color="#fff"
								iconStyle={[styles.buttonIcon]}
								name="note"
								size={styles.buttonIcon.height}
								onPress={ () => {
									navigate(N.PERFORMANCE_BEGIN);
								}}
							>
								<Text style={[styles.buttonText,{textAlign:'center'}]}>Performances</Text>
							</Icon.Button>

							<Icon.Button
								style={(!this.props.performanceId || !this.props.feedbackId) ? [styles.buttonDisabled] : [styles.button]}
								//backgroundColor={styles.buttonDisabled.backgroundColor : styles.button.backgroundColor}
								name="text-document-inverted"
								size={styles.buttonIcon.height}
								color="#fff"
								iconStyle={(!this.props.performanceId || !this.props.feedbackId) ? [styles.buttonIconDisabled] : [styles.buttonIcon] }
								disabled={!this.props.performanceId || !this.props.feedbackId}
								onPress={ () => {
									navigate(N.QUESTIONS);
								}}
							>
								<Text style={[styles.buttonText]}>Questions</Text>
							</Icon.Button>

							{/*__DEV__ &&
								<Button
									title="Purge Persist"
									onPress={() => {
										C.warn("Purging the persistant data");
										this.props.screenProps.persister.purge();
									}}
								/>
							*/}
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
		height:45,
		borderRadius: Platform.OS === "android" ? 0 : 3, /* Bug in android stops borders working */
		borderBottomWidth: 5,
		borderBottomColor: '#157efb'
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