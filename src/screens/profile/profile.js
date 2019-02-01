import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from "react-native"
import { SegmentedControls as RadioSegmentedControls } from 'react-native-radio-buttons'

import Icon from 'react-native-vector-icons/Entypo';

import TemplateBase from '../../components/templateBase'
import QuestionBase from '../../components/questions/questionBase'
import QuestionDate from '../../components/questions/questionDate'
import QuestionRadio from '../../components/questions/questionRadio'

import { MainBackgroundColor as MainColor, InputBackgroundColor } from "../../style/index";

import CheckboxGroup from 'react-native-checkbox-group'

const inputBackgroundColor = InputBackgroundColor;
const radioTint = '#555';

export default class Profile extends Component {
	// noinspection JSUnusedGlobalSymbols
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Profile"
	});

	educationOptions = [
		'GCSEs', 'A-levels', "Bachelor's Degree", 'Masters Degree', 'PhD', 'Other'
	];
	educationOptionsOtherIndex = 5;

	state = {
		shortId : null,

		dateOfBirth: null,
		musicTraining: null,
		musicField: null,
		mathTraining: null,
		mathField: null,
		education: null,
		educationOther: null,
		musicListen: null
	};

	// noinspection JSUnusedGlobalSymbols
	componentWillMount = () => {
		this.setStateFromProps();
	};

	// noinspection JSUnusedGlobalSymbols
	componentWillUnmount = () => {
		if( this.props.onSync ) {
			this.props.onSync()
				.catch( ()=>{} );
		}
	};

	setStateFromProps = () => {

		this.setState({
			shortId : this.props.shortId,

			dateOfBirth: this.props.dateOfBirth,
			musicTraining: this.props.musicTraining,
			musicField: this.props.musicField,
			mathTraining: this.props.mathTraining,
			mathField: this.props.mathField,
			education: this.props.education,
			educationOther: this.props.educationOther,
			musicListen: this.props.musicListen,

			email: this.props.email,
			emailFuture: this.props.emailFuture
		});

		//this.updateCheckboxGroup( this.motivationOptions, question.motivation || [] );
	};

	setDateOfBirth = () => {
		if( this.props.setDateOfBirth ) {
			this.props.setDateOfBirth( this.state.dateOfBirth );
		}
	};
	setMusicTraining = () => {
		if( this.props.setMusicTraining ) {
			this.props.setMusicTraining( this.state.musicTraining );
		}};
	setMusicField = () =>  {
		if( this.props.setMusicField ) {
			this.props.setMusicField( this.state.musicField );
		}};
	setMathTraining = () => {
		if( this.props.setMathTraining ) {
			this.props.setMathTraining( this.state.mathTraining );
		}};
	setMathField = () => {
		if( this.props.setMathField ) {
			this.props.setMathField( this.state.mathField );
		}};
	setEducation = () => {
		if( this.props.setEducation ) {
			this.props.setEducation( this.state.education );
		}};
	setEducationOther = () => {
		if( this.props.setEducationOther ) {
			this.props.setEducationOther( this.state.educationOther );
		}};
	setMusicListen = () => {
		if( this.props.setMusicListen ) {
			this.props.setMusicListen( this.state.musicListen );
		}
	};

	setEmail = () => {
		if( this.props.setEmail ) {
			this.props.setEmail(this.state.email );
		}
	};
	setEmailFuture = () => {
		if( this.props.setEmailFuture ) {
			this.props.setEmailFuture( this.state.emailFuture );
		}
	};

	render() {
		const { goBack } = this.props.navigation;

		return (
			<TemplateBase
				icon="user"
				mainTitle="Profile"
				subTitle="Your details"
			>
				<View style={{flex:1, paddingLeft: 20, paddingRight: 20, paddingBottom: 150}}>

					<View style={[styles.group, {paddingTop: 20}]}>
						<Text>To help with our research we ask that you answer the following questions.
							All data collected will be anonymous, see the About page for more details.</Text>
					</View>

					<View style={[styles.question]}>
						<Text style={[styles.label]}>Anonymous identifier</Text>
						<Text style={{fontSize:20}}>{this.state.shortId}</Text>
					</View>

					<QuestionDate
						title={"Date of Birth"}
						text={"What is your date of birth? (YYYY-MM-DD)"}
						value={this.state.dateOfBirth}
						onChange={ (date) =>
							this.setState({dateOfBirth:date},this.setDateOfBirth)
						}
					/>

					<QuestionRadio
						title={"Formal Music Training"}
						text={"How many years of formal music training have you had (including A-level and any instrumental, vocal or composition lessons)?"}
						options={[0,1,2,3,4,5,6,7,8,9,"10+"]}
						value={this.state.musicTraining}
						onChange={ (option) =>
							this.setState({musicTraining: option}, this.setMusicTraining)
						}
					/>

					<QuestionRadio
						title={"Musical Field"}
						text={"Do you currently play a musical instrument, sing or compose, and if so for how many years? (Please select zero if you do not have any)"}
						options={[0,1,2,3,4,5,6,7,8,9,"10+"]}
						value={this.state.musicField}
						onChange={ (option) =>
							this.setState({musicField: option}, this.setMusicField)
						}
					/>

					<QuestionRadio
						title={"Mathematical Training"}
						text={"How many years of formal mathematics training have you had (including A-level and any further study of mathematics)?"}
						options={[0,1,2,3,4,5,6,7,8,9,"10+"]}
						value={this.state.mathTraining}
						onChange={ (option) =>
							this.setState({mathTraining: option}, this.setMathTraining)
						}
					/>

					<QuestionRadio
						title={"Mathematical Field"}
						text={"Do you currently work in a field which requires mathematical skills, and if so for how many years have you worked in this area? (Please select zero if you do not work with mathematics)"}
						options={[0,1,2,3,4,5,6,7,8,9,"10+"]}
						value={this.state.mathField}
						onChange={ (option) =>
							this.setState({mathField: option}, this.setMathField)
						}
					/>

					<QuestionRadio
						title={"Education"}
						text={"What is your highest level of formal qualification?"}
						direction={"column"}

						options={this.educationOptions}
						value={this.state.education}
						onChange={ (option) =>
							this.setState({education:option},this.setEducation)
						}

						textEntry={true}
						textEntryValue={this.state.educationOther}
						textEntryOption={this.educationOptions[this.educationOptionsOtherIndex]}
						textEntryOnChange={ (text) => this.setState({educationOther:text},this.setEducationOther) }

					/>

					<QuestionRadio
						title={"Listening to Music"}
						text={"How often do you listen to music (of any style)?"}
						direction={"column"}

						options={['Never', 'Occasionally', 'Sometimes', 'Most days', 'Every day'] }
						value={this.state.musicListen}
						onChange={ (option) =>
							this.setState({musicListen:option},this.setMusicListen)
						}
					/>

					<QuestionBase
						title={"Optional"}
						text={"If you'd like to be notified of the results from this study you can enter your email here:"}
					>
						<View style={{flex:12,backgroundColor:inputBackgroundColor}}>
							<TextInput
								style={[styles.textInput, {
									width: '100%',
								}]}
								keyboardType='email-address'
								value={this.state.email}
								onChangeText={ (text) => this.setState({email:text},this.setEmail)}
							/>
						</View>
						<CheckboxGroup
							callback={ (selected) => this.setState({emailFuture:selected.length !== 0},this.setEmailFuture)}
							iconColor={(this.state.email && this.state.email.length>0) ? "steelblue" : "#ddd"}
							iconSize={30}
							checkedIcon="ios-checkbox-outline"
							uncheckedIcon="ios-square-outline"
							enabled={false}
							checkboxes={[
								{
									label: "If you would also like to be notified of other future studies tick this box.",
									value: 1,
									selected: this.state.emailFuture
								},
							]}
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
					</QuestionBase>

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
	group: {
		marginBottom: 15
	},
	label: {
		fontWeight: "bold",
		marginBottom: 10,
	},
	question: {
		marginBottom: 30,
		flex: 1,
		borderBottomColor: 'steelblue',
		borderBottomWidth: 4,
		paddingBottom: 40,
	},
	questionText: {
		paddingTop: 10,
		paddingBottom: 20
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