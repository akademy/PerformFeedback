import React, { Component } from 'react'
import { StyleSheet, Text, View } from "react-native"

import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'
import { NAVIGATION as N } from "../../constants"
import { Console as C } from "../../lib/console"

export default class Performance extends Component {

	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => {
		C.log( "navOpts");
		return {
			title: "Performance"
		}
	};

	timestampType = {
		PRE: "pre",
		START : "start",
		FINISH : "finish",
	};

	// Call just before navigating back to this screen
	navigateWithBack = () => {
		C.log('navigateWithBack');
		this.createSectionText();
		this.startSyncInterval();
	};

	performanceId = 'manchester2017';
	sectionsChangedInterval = null;

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
		let feedbackId = null;

		if( this.props.setPerformanceId ) { // TODO: Remove to own component
			this.props.setPerformanceId( 'manchester2017' );
		}

		if( this.props.createFeedback ) {
			feedbackId = this.props.createFeedback();
		}

		let sections = [];

		if( this.props.navigation.state.params.timestamp ) {
			sections.push({
				ty: this.timestampType.PRE,
				ts: this.props.navigation.state.params.timestamp,
			})
		}
		sections.push({
			ty: this.timestampType.START,
				ts: Date.now(),
		});

		this.setState( {
				sections: sections,
				sectionsNeedSync: true,
				feedbackId
			},
			() => {
				this.sectionsChanged();
			}
		);

		C.log("IntervalID:", this.sectionsChangedInterval );
	};

	// noinspection JSUnusedGlobalSymbols
	componentDidMount = () => {
		C.log( 'componentDidMount' );
		this.startSyncInterval();
	};

	startSyncInterval = () => {
		C.log( 'startSyncInterval' );
		if( this.sectionsChangedInterval !== null ) {
			this.stopSyncInterval();
		}

		this.sectionsChangedInterval = setInterval( () => {
			C.log( 'setIntervalCalled' );
			this.syncFeedback();
		},
			Math.floor( ( ( Math.random() * 4 ) + 4 ) * 1000 ) // Wait 4 to 8 seconds to check for needed updates.
		);

		C.log("Interval ID:", this.sectionsChangedInterval );
	};

	stopSyncInterval = () => {
		C.log( 'stopSyncInterval' );
		C.log("IntervalID:", this.sectionsChangedInterval );

		if( this.sectionsChangedInterval ) {
			clearInterval(this.sectionsChangedInterval);
			this.sectionsChangedInterval = null;
		}
	};

	componentWillUnmount = () => {
		C.log( 'componentWillUnmount' );
		this.stopSyncInterval();
	};

	syncFeedback = () => {
		C.log( 'syncFeedback' );
		if( this.props.onFeedbackSync ) {
			this.props.onFeedbackSync( this.state.feedbackId )
				.catch( ()=>{} );
		}
	};

	sectionsChanged = () => {
		C.log( 'sectionsChanged' );
		if( this.props.setFeedbackData ) {
			this.props.setFeedbackData( this.state.feedbackId, this.state.sections );
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

			<TemplateBase
				icon="note"
				mainTitle="Performance" subTitle="Watching a performance">
				<View style={{
					height: 95,
					justifyContent: 'center',
					backgroundColor: 'black'
				}}>
					<Text style={{
						maxHeight: 95,
						textAlign:'center',
						padding: 10,
						color: 'white',
						fontSize: (this.state.sectionTexts.length > 50 ) ? 16 : 20
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
								C.log("Button: Add Section End");
								const now = Date.now(); // immediately take a time snapshot

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
						>Add section end</Button>
					</View>

					<View style={{flex:1,paddingBottom: 20}}>
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
								C.log('Button: Mark last as Error', this.state);

								this.setState((prevState) => {
									C.log('Button: Mark last as Error', prevState);
									const sections = prevState.sections.slice();

									for( let i=sections.length; i; i-- ) {
										if( sections[i-1].ty !== this.timestampType.FINISH ) {
											sections[i-1].error = true;
											break;
										}
									}

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
						>Mark last as accidental</Button>
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
								C.log("Button: Finish");
								this.stopSyncInterval();

								const now = Date.now(); // immediately take a time snapshot

								this.setState( (prevState) => {
										const sections = prevState.sections.slice();
										sections.push({
											ty: this.timestampType.FINISH,
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

										navigate(N.PERFORMANCE_FINISH, { navigateWithBack: this.navigateWithBack });
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