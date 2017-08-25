import React, { Component } from 'react'
import {StyleSheet, Text, View} from "react-native"

import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'
import {NAVIGATION as N} from "../../constants";

export default class Performance extends Component {

	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Sections"
	});

	state = {
		startTime: 0,
		sections: [],
		sectionTexts: '',
		removeButtonDisabled: true
	};

	// noinspection JSUnusedGlobalSymbols
	componentWillMount = () => {
		// TODO: Reset on
		console.log('willmount');
		this.setState({
			startTime: Date.now()
		});
	};

	// noinspection JSUnusedGlobalSymbols
	componentDidMount = () => {
		this.createSectionText()
	};

	createSectionText = () => {
		const count = this.state.sections.length,
			charOK = ' ' + '●',//'▮',//'𝄁',//'☉',//
			charError = ' ' + '○',
			texts = [];

		if( count > 0 ) {
			for (let i = 0; i < count; i++) {
				let text = (this.state.sections[i].error) ? charError : charOK;

				if( i === 0 ) {
					text = text[1]; // remove space
				}

				texts.push(
					<Text key={i+1}>{text}</Text>
				)
			}
		}

		this.setState( { sectionTexts: texts } );
	};

	render() {
		const { navigate } = this.props.navigation;

		return (

			<TemplateBase mainTitle="Performance" subTitle="Watching a performance">
				<View style={{
					height: 95,
					justifyContent: 'center',
					backgroundColor: 'black'
				}}>
					<Text style={{
						maxHeight: 95,
						textAlign:'center',
						padding: 10,
						color: 'white'
					}}>{this.state.sectionTexts}</Text>
				</View>
				<View style={{flex:1,padding: 20}}>
					<View style={{flex:3, paddingBottom: 20}}>
						<Button
							style={{
								backgroundColor: '#1ddd6a',
								borderColor: '#1db259',
								height: '100%'
							}}
							textStyle={{
								color: '#fff',
								fontSize: 18
							}}
							onPress={ () => {
								this.setState( (prevState) => {
									const sections = prevState.sections.slice();
									sections.push({
										t: Date.now(),
									});
									return {
										sections ,
										removeButtonDisabled: false,
									}
								}
								, () => {
									this.createSectionText()
								});
							} }
						>Add Section End</Button>
					</View>

					<View style={{flex:2,paddingBottom: 20}}>
						<Button
							style={{
								backgroundColor: '#dd2325',
								borderColor: '#b42224',
								height: '100%'
							}}
							textStyle={{
								color: '#fff',
								fontSize: 16
							}}
							disabledStyle={{
								backgroundColor: '#b0a6ad',
								borderColor: '#847a81',
							}}
							onPress={ () => {
								this.setState((prevState) => {
									const sections = prevState.sections.slice();
									sections[prevState.sections.length-1].error = true;
									return {
										sections,
										removeButtonDisabled: true,
									}
								}, () => {
									this.createSectionText()
								});
							} }
							isDisabled={this.state.removeButtonDisabled}
						>Mark last as Error</Button>
					</View>

					<View style={{flex:1,paddingBottom: 20}}>
						<Button
							style={{
								backgroundColor: '#000',
								borderColor: '#222',
								height: 50
							}}
							textStyle={{
								color: '#fff',
								fontSize: 14
							}}
							onPress={ () => {navigate(N.PERFORMANCE_FINISH)} }
						>Finish</Button>
					</View>
				</View>
			</TemplateBase>
		);
	}
}


const styles = StyleSheet.create({
	circleDone : {
		color: 'green',
	},
	circleDeleted : {
		color: 'red',
	},
	circle : {
		color: 'black',
	}
});