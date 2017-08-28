import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"

import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'
import { NAVIGATION as N } from "../../constants"
import { Console as C } from "../../console"

export default class Performance extends Component {

	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Sections"
	});

	performanceId = 'manchester2017';

	state = {
		sections: [],
		sectionsNeedSync: false,
		sectionTexts: '',
		removeButtonDisabled: true
	};

	// noinspection JSUnusedGlobalSymbols
	componentWillMount = () => {
		C.log( 'componentWillMount' );
		// TODO?: Reset on retake

		if( this.props.setPerformanceId ) { // TODO: Remove to own component
			this.props.setPerformanceId( 'manchester2017' );
		}

		if( this.props.createFeedback ) {
			this.props.createFeedback();
		}

		const now = Date.now();

		this.setState( (prevState) => {
			const sections = prevState.sections.slice();
				sections.push({
					ty: 'start',
					ts: now,
				});
				return {
					sections ,
					sectionsNeedSync: true
				}
			}
			, () => {
				this.createSectionText()
			}
		);
	};

	// noinspection JSUnusedGlobalSymbols
	componentDidMount = () => {
		C.log( 'componentDidMount' );
		this.createSectionText();

		this.sectionsChangedInterval = setInterval( () => {
			this.syncFeedback();
		}, Math.floor( ( ( Math.random() * 4 ) + 4 ) * 1000 ) ); // Wait 4 to 8 seconds to check for needed updates.
	};

	componentWillUnmount = () => {
		C.log( 'componentWillUnmount' );
		clearInterval( this.sectionsChangedInterval );
	};

	syncFeedback = () => {
		C.log( 'syncFeedback' );
		if( this.props.onFeedbackSync ) {
			this.props.onFeedbackSync( this.props.feedbackId )
		}
	};

	sectionsChanged = () => {
		C.log( 'sectionsChanged' );
		if( this.props.setFeedbackData ) {
			this.props.setFeedbackData( this.props.feedbackId, this.state.sections );
		}
	};

	createSectionText = () => {
		const count = this.state.sections.length,
			charOK = ' ' + '●',//'▮',//'𝄁',//'☉',//
			charError = ' ' + '○',
			texts = [];

		if( count > 0 ) {
			for (let i = 0; i < count; i++) {
				if( !this.state.sections[i].ty ) {
					let text = (this.state.sections[i].error) ? charError : charOK;

					if (i === 0) {
						text = text[1]; // remove space
					}

					texts.push(
						<Text key={i + 1}>{text}</Text>
					)
				}
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
								const now = Date.now();

								this.setState( (prevState) => {
									const sections = prevState.sections.slice();
									sections.push({
										ts: now,
									});
									return {
										sections ,
										removeButtonDisabled: false,
										sectionsNeedSync: true
									}
								}
								, () => {
									this.sectionsChanged();
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
										sectionsNeedSync: true
									}
								}, () => {
									this.sectionsChanged();
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
							onPress={ () => {
								const now = Date.now();

								this.setState( (prevState) => {
										const sections = prevState.sections.slice();
										sections.push({
											ty: 'finish',
											ts: now,
										});
										return {
											sections ,
											sectionsNeedSync: true
										}
									}
									, () => {
										C.log( this.state );

										this.sectionsChanged();
										this.syncFeedback();

										navigate(N.PERFORMANCE_FINISH)
									}
								);
							} }
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