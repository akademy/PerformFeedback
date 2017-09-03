import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native"

import Button from 'apsl-react-native-button'

import { DialogComponent, SlideAnimation, DialogContent, DialogButton }from 'react-native-dialog-component';

import TemplateBase from '../templateBase'
import {NAVIGATION as N} from "../../constants";

export default class Performance extends Component {

	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance"
	});

	state = { beginButtonDisabled : true };

	// noinspection JSUnusedGlobalSymbols
	componentDidMount = () => {
		setTimeout( () => {
			this.dialogComponent.show();
		}, 300 );
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={{
				flex: 1
			}}>
				<DialogComponent
					ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
					dialogAnimation = { new SlideAnimation({ slideFrom: 'top' }) }
					width={300}
					dismissOnTouchOutside={false}
				>
					<DialogContent>
						<View style={{
							justifyContent: 'center',
						}}>
							<Text style={[styles.dialogText, styles.dialogTitle]}>Wait until instructed to proceed</Text>
							<Text style={[styles.dialogText]}>
								After you close this dialog, wait until instructed to press the Begin button.
							</Text>
							<Text style={[styles.dialogText]}>Timing is everything.</Text>
							<DialogButton
								onPress={() => {
									this.dialogComponent.dismiss();
									this.setState({beginButtonDisabled: false});
								}}
								text="OK"/>
						</View>
					</DialogContent>
				</DialogComponent>

				<TemplateBase mainTitle="Performance" subTitle="Watching a performance">
					<View style={{flex:1,padding: 20}}>
						<Text style={[styles.text]}>Please only proceed to the next screen once instructed to do so.</Text>
						<Text style={[styles.text]}>
						In the following screen you will be able to mark a position as a
							"section end" in the music you are listening to.
						</Text>
						<Text style={[styles.text]}>
							Simple press the "Add section end" button when you believe a section comes to an end.
						</Text>
						<Text style={[styles.text]}>
							If you accidentally press the "Add section end" button you can mark it as accidental by pressing the "Mark last as accidental" button.
						</Text>
						{/*<Button
							onPress={ ()=>{navigate(N.PERFORMANCE_SECTIONS)} }
							title="Begin"
							disabled={this.state.beginButtonDisabled}
						/>*/}
						<View style={{paddingTop: 20}}>
							<Button
								style={{
									backgroundColor: '#1ddd6a',
									borderColor: '#1db259',
									height: 100
								}}
								textStyle={{
									color: '#fff',
									fontSize: 18
								}}
								onPress={ () => {
									navigate(N.PERFORMANCE_SECTIONS,{timestamp: Date.now()});
								}}
								isDisabled={this.state.beginButtonDisabled}
							>BEGIN</Button>
						</View>
					</View>
				</TemplateBase>
			</View>
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