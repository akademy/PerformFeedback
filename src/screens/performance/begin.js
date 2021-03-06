import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Button from 'apsl-react-native-button'

import { DialogComponent, SlideAnimation, DialogContent, DialogButton }
	from 'react-native-dialog-component'

import TemplateBase from '../../components/templateBase'
import {NAVIGATION as N, MODE} from '../../constants'

import { performanceFromId } from '../../lib/helper'

export default class Performance extends Component {

	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Performance"
	});

	constructor(props) {
		super(props);
		console.log( props.performances, props.performanceId );

		this.state = {
			beginButtonDisabled : true,
			performance: performanceFromId(props.performances, props.performanceId) //"oxfordJanuary2018"
		};
	}

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
							<DialogButton
								onPress={() => {
									this.dialogComponent.dismiss();
									this.setState({beginButtonDisabled: false});
								}}
								text="OK"/>
						</View>
					</DialogContent>
				</DialogComponent>

				<TemplateBase
					icon="note"
					mainTitle="Performance"
					subTitle="Before the performance"
				>
					<View style={{flex:1,padding: 20}}>
						<Text style={[styles.text,{fontWeight:'bold'}]}>
							Please only proceed to the next screen once instructed to do so.
						</Text>
						{this.state.performance.mode === MODE.PALINDROME ?
							<Text style={[styles.text]}>
								When the performance starts you will be able to mark when you believe you have detected a palindrome section.
								Simply press the green button "Mark a palindrome".
							</Text>
							:
							<Text style={[styles.text]}>
								When the performance starts you will be able to mark when you believe a section in the
								music comes to an end. Simply press the green button "Add section end".
							</Text>
						}
						<Text style={[styles.text]}>
							If you accidentally press the button you can mark it as accidental by pressing the red "Mark last as accidental" button.
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
									// TODO: Stop back button working on next screen: (But need to pass over timestamp) changePathAndNavigate( this.props.navigation, [N.HOME, N.QUESTIONS]
								}}
								isDisabled={this.state.beginButtonDisabled}
							>Begin</Button>
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