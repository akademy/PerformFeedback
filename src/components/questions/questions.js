import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SegmentedControls as RadioSegmentedControls } from 'react-native-radio-buttons'
import CheckboxGroup from 'react-native-checkbox-group'

import Icon from 'react-native-vector-icons/Entypo';

import TemplateBase from '../templateBase'
import {MainBackgroundColor as MainColor, InputBackgroundColor} from "../../style/";
import {Console as C} from '../../lib/console'

const inputBackgroundColor = InputBackgroundColor;
const radioTint = '#555';

export default class Questions extends Component {
	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Questions"
	});

	state = {
		performanceId: this.props.performanceId,

		musicLengthSeconds: null,
		musicLengthMinutes: null,

		describe1: "",
		describe2: "",
		describe3: "",

		influences: "",

		enjoy : null,
		familiar: null,
		participation: null,

		motivation: []
	};

	motivationOptions = [
		{
			label: "I wanted to learn more about music and maths working together", // label for checkbox item
			value: 1, // selected value for item, if selected, what value should be sent?
		},
		{
			label: "I am a regular attendee of RNCM events",
			value: 2
		},
		{
			label: "I wanted to take part in a scientific study",
			value: 3
		},
		{
			label: "A friend / family member asked me to come along",
			value: 4
		},
	];

	componentWillMount = () => {
		C.log( 'componentWillMount' );

		let question = null;

		if( this.props.performanceId && this.props.questions ) {
			for( let i=0, z=this.props.questions.length; i<z; i++ ) {
				if( this.props.questions[i].performanceId === this.props.performanceId ) {
					question = this.props.questions[i];

					break;
				}
			}
		}

		if( question === null && this.props.createQuestion ) {
			this.props.createQuestion( this.props.performanceId )
		}
		else {
			this.setStateFromQuestion( question );
		}
	};

	componentWillUnmount = () => {
		if( this.props.doSync ) {
			this.props.doSync()
				.catch( ()=>{} );
		}
	};

	setStateFromQuestion = (question) => {

		let musicLengthSeconds = null;
		let musicLengthMinutes = null;

		if( question.musicLength > 0 ) {
			musicLengthSeconds = this.checkInt(question.musicLength % 60).toString();
			musicLengthMinutes = this.checkInt(Math.floor(question.musicLength / 60)).toString();
		}

		this.setState({
			musicLengthSeconds,
			musicLengthMinutes,

			describe1: question.describe && question.describe[0] ? question.describe[0] : "",
			describe2: question.describe && question.describe[1] ? question.describe[1] : "",
			describe3: question.describe && question.describe[2] ? question.describe[2] : "",

			influences: question.influences,

			enjoy : question.enjoy,
			familiar: question.familiar,
			often: question.often,
			familiarPiece: question.familiarPiece,
			participation: question.participation,

			comments: question.comments,
			motivation: question.motivation
		});

		this.updateCheckboxGroup( this.motivationOptions, question.motivation || [] );
	};

	updateCheckboxGroup = (group, selected) => {
		for( let i=0, z=group.length; i<z; i++ ){
			group[i].selected = (selected.indexOf(group[i].value) !== -1);
		}
	};

	setQuestionComments = () => {
		if( this.props.setQuestionComments ) {
			this.props.setQuestionComments( this.props.performanceId, this.state.comments );
		}};
	setQuestionDescribe = () => {
		if( this.props.setQuestionDescribe ) {
			let words = [
				this.state.describe1,
				this.state.describe2,
				this.state.describe3
			];

			this.props.setQuestionDescribe( this.props.performanceId, words );
		}
	};
	setQuestionEnjoy = () => {
		if( this.props.setQuestionEnjoy ) {
			this.props.setQuestionEnjoy( this.props.performanceId, this.state.enjoy );
		}
	};
	setQuestionFamiliar = () => {
		if( this.props.setQuestionFamiliar ) {
			this.props.setQuestionFamiliar( this.props.performanceId, this.state.familiar );
		}
	};
	setQuestionFamiliarPiece = () => {
		if( this.props.setQuestionFamiliarPiece ) {
			this.props.setQuestionFamiliarPiece( this.props.performanceId, this.state.familiarPiece );
		}
	};
	setQuestionOften = () => {
		if( this.props.setQuestionOften ) {
			this.props.setQuestionOften( this.props.performanceId, this.state.often );
		}
	};
	setQuestionInfluences = () => {
		if( this.props.setQuestionInfluences ) {
			this.props.setQuestionInfluences( this.props.performanceId, this.state.influences );
		}
	};
	setQuestionMotivation = () => {
		if (this.props.setQuestionMotivation) {
			this.props.setQuestionMotivation(this.props.performanceId, this.state.motivation);
		}
	};
	setQuestionMusicLength = () => {
		if( this.props.setQuestionMusicLength ) {

			let seconds = this.checkInt(this.state.musicLengthMinutes) * 60;
			seconds += this.checkInt(this.state.musicLengthSeconds);

			this.props.setQuestionMusicLength( this.props.performanceId, seconds );
		}

	};
	setQuestionParticipation = () => {
		if( this.props.setQuestionParticipation ) {
			this.props.setQuestionParticipation( this.props.performanceId, this.state.participation );
		}
	};

	checkInt = (poss) => {
		let int = 0;
		if( poss ) {
			int = parseInt(poss, 10);
		}
		return isNaN(int) ? 0 : int;
	};

	render() {
		const { goBack } = this.props.navigation;
		let questionNumber = 1;

		return (
			<TemplateBase
				icon="text-document-inverted"
				mainTitle="Questions" subTitle="Post performance">
				<View style={{flex:1,paddingRight: 20,paddingLeft:20, paddingBottom: 150}}>

					<View style={[styles.question, {marginTop:20}]}>
						<Text style={{textAlign: 'center',fontWeight:'bold'}}>Please only answer these questions after the performance has finished.</Text>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>How long did you think the piece of music lasted?</Text>
						<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
							<View style={{backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={[{textAlign:'right',width: 45, fontSize:20}]}
									editable={true}
									keyboardType='numeric'
									value={this.state.musicLengthMinutes}
									placeholder="0"
									onChangeText={ (text) => this.setState({musicLengthMinutes:text},this.setQuestionMusicLength)}
								/>
							</View>
							<Text> Minutes </Text>
							<View style={{backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={[{textAlign:'right',width: 35, fontSize:20}]}
									editable={true}
									keyboardType='numeric'
									value={this.state.musicLengthSeconds}
									placeholder="0"
									onChangeText={ (text) => this.setState({musicLengthSeconds:text},this.setQuestionMusicLength )}
								/>
							</View>
							<Text> Seconds</Text>
						</View>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>Please describe the piece in three words:</Text>
						<View style={{
							flex:1,
							flexDirection:'row',
							alignItems:'center',
							marginBottom: 5
						}}>
							<Text style={{flex:1}}>1</Text>
							<View style={{flex:12,backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={[styles.textInput,{
										width:'100%'
									}]}
									value={this.state.describe1}
									onChangeText={ (text) => this.setState({describe1:text},this.setQuestionDescribe)}
								/>
							</View>
						</View>
						<View style={{
							flex:1,
							flexDirection:'row',
							alignItems:'center',
							marginBottom: 5
						}}>
							<Text style={{flex:1}}>2</Text>
							<View style={{flex:12,backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={[styles.textInput, {
										width: '100%',
									}]}
									value={this.state.describe2}
									onChangeText={ (text) => this.setState({describe2:text},this.setQuestionDescribe)}
								/>
							</View>
						</View>
						<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
							<Text style={{flex:1}}>3</Text>
							<View style={{flex:12,backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={[styles.textInput, {
										width: '100%',
									}]}
									value={this.state.describe3}
									onChangeText={ (text) => this.setState({describe3:text},this.setQuestionDescribe)}
								/>
							</View>
						</View>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>How did you decide when a section had ended?</Text>
						<View style={{width: '90%',backgroundColor:inputBackgroundColor}}>
							<TextInput
								style={[styles.textInput, {
									width: '100%',
								}]}

								multiline={true}
								numberOfLines={3}
								value={this.state.influences}
								onChangeText={ (text) => this.setState({influences:text},this.setQuestionInfluences)}
							/>
						</View>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>How much did you enjoy the piece of music?</Text>
						<Text style={[styles.key]}>
							<Text><Text style={{fontWeight:'bold'}}>1</Text> : I didn't enjoy it at all</Text>{'\n'}
							<Text><Text style={{fontWeight:'bold'}}>7</Text> : I enjoyed it a lot</Text>
						</Text>
						<RadioSegmentedControls
							options={ [1,2,3,4,5,6,7] }
							onSelection={ (option) => this.setState({enjoy:option},this.setQuestionEnjoy) }
							selectedOption={this.state.enjoy}
							tint={radioTint}
							selectedTint={'white'}
							backTint= {inputBackgroundColor}
							paddingTop={10}
							paddingBottom={25}
							selectedBackgroundColor={MainColor}
							//renderOption={ this.renderOption }
							//renderContainer={ this.renderContainer }
						/>
						{/*
							list of the props you might override:
							const IOS_BLUE = '#007AFF';
							const IOS_WHITE = '#ffffff';

							const DEFAULTS = {
							  direction: 'row',

							  tint: IOS_BLUE,
							  backTint: IOS_WHITE,

							  paddingTop: 5,
							  paddingBottom: 5,
							  textAlign: 'center',

							  selectedTint: IOS_WHITE,
							  selectedBackgroundColor: IOS_WHITE,

							  separatorTint: IOS_BLUE,
							  separatorWidth: 1,

							  containerBorderTint: IOS_BLUE,
							  containerBorderWidth: 1,
							  containerBorderRadius: 5,

							}
							*/}
					</View>


					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>As a listener, how familiar are you with twentieth-century classical music?</Text>
						<Text style={[styles.key]}>
							<Text><Text style={{fontWeight:'bold'}}>1</Text> : I am not familiar with it at all</Text>{'\n'}
							<Text><Text style={{fontWeight:'bold'}}>7</Text> : I am very familiar with it</Text>
						</Text>

						<RadioSegmentedControls
							options={ [1,2,3,4,5,6,7] }
							onSelection={ (option) => this.setState({familiar:option},this.setQuestionFamiliar) }
							selectedOption={this.state.familiar}
							tint={radioTint}
							selectedTint={'white'}
							backTint= {inputBackgroundColor}
							paddingTop={10}
							paddingBottom={25}
							selectedBackgroundColor={MainColor}
							//renderOption={ this.renderOption }
							//renderContainer={ this.renderContainer }
						/>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>How often do you listen to twentieth-century classical music?</Text>
						<Text style={[styles.key]}>
							<Text><Text style={{fontWeight:'bold'}}>1</Text> : Never listen</Text>{'\n'}
							<Text><Text style={{fontWeight:'bold'}}>7</Text> : Listen every day</Text>
						</Text>

						<RadioSegmentedControls
							options={ [1,2,3,4,5,6,7] }
							onSelection={ (option) => this.setState({often:option},this.setQuestionOften) }
							selectedOption={this.state.often}
							tint={radioTint}
							selectedTint={'white'}
							backTint= {inputBackgroundColor}
							paddingTop={10}
							paddingBottom={25}
							selectedBackgroundColor={MainColor}
							//renderOption={ this.renderOption }
							//renderContainer={ this.renderContainer }
						/>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>How familiar are you with the piece performed tonight?</Text>
						<Text style={[styles.key]}>
							<Text><Text style={{fontWeight:'bold'}}>1</Text> : I've never heard of it</Text>{'\n'}
							<Text><Text style={{fontWeight:'bold'}}>7</Text> : I've heard it many times</Text>
						</Text>

						<RadioSegmentedControls
							options={ [1,2,3,4,5,6,7] }
							onSelection={ (option) => this.setState({familiarPiece:option},this.setQuestionFamiliarPiece) }
							selectedOption={this.state.familiarPiece}
							tint={radioTint}
							selectedTint={'white'}
							backTint= {inputBackgroundColor}
							paddingTop={10}
							paddingBottom={25}
							selectedBackgroundColor={MainColor}
							//renderOption={ this.renderOption }
							//renderContainer={ this.renderContainer }
						/>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>Does participation in a scientific experiment such as this increase or decrease your enjoyment of a concert experience?</Text>
						<Text style={[styles.key]}>
							<Text><Text style={{fontWeight:'bold'}}>1</Text> : It significantly decreases my enjoyment</Text>{'\n'}
							<Text><Text style={{fontWeight:'bold'}}>7</Text> : It significantly increases my enjoyment</Text>
						</Text>
						<RadioSegmentedControls
							options={ [1,2,3,4,5,6,7] }
							onSelection={ (option) => this.setState({participation:option},this.setQuestionParticipation) }
							selectedOption={this.state.participation}
							tint={radioTint}
							selectedTint={'white'}
							backTint= {inputBackgroundColor}
							paddingTop={10}
							paddingBottom={25}
							selectedBackgroundColor={MainColor}
							//renderOption={ this.renderOption }
							//renderContainer={ this.renderContainer }
						/>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>What motivated you to come to tonight's event? (Select all that apply)</Text>
						<CheckboxGroup
							callback={ (selected) => this.setState({motivation:selected.sort()},this.setQuestionMotivation)}
							iconColor={"steelblue"}
							iconSize={30}
							checkedIcon="ios-checkbox-outline"
							uncheckedIcon="ios-square-outline"
							checkboxes={this.motivationOptions}
							labelStyle={{
								color: '#333',
								paddingLeft: 10,
								fontSize: 12,
								width: '90%'
							}}
							rowStyle={{
								flexDirection: 'row',
								marginTop: 10,
								backgroundColor: inputBackgroundColor
							}}
							rowDirection={"column"}
						/>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Q{questionNumber++}</Text>
						<Text style={[styles.questionText]}>Please use this box for any other comments you wish to make.</Text>
						<View style={{width: '90%', backgroundColor:inputBackgroundColor}}>
						<TextInput
							style={[styles.textInput, {
								width: '100%',
							}]}

						    multiline={true}
						    numberOfLines={3}
							value={this.state.comments}
							onChangeText={ (text) => this.setState({comments:text},this.setQuestionComments)}
						/>
						</View>
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
								goBack();
							}}
						>
							<Text style={[styles.buttonText]}>Finish</Text>
						</Icon.Button>
					</View>

				</View>
			</TemplateBase>
		);
	}
}


const styles = StyleSheet.create({
	question: {
		marginBottom: 40,
		flex: 1,
		borderBottomColor: 'steelblue',
		borderBottomWidth: 4,
		paddingBottom: 40,
	},
	label: {
		fontWeight: "bold"
	},
	questionText: {
		paddingTop: 10,
		paddingBottom: 20
	},
	key: {
		paddingBottom: 20,
		paddingLeft: 10
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