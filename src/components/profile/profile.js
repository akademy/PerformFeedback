import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput } from "react-native"
import { SegmentedControls as RadioSegmentedControls } from 'react-native-radio-buttons'

import Icon from 'react-native-vector-icons/Entypo';

import TemplateBase from '../templateBase'
import DatePicker from 'react-native-datepicker'

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
				<View style={{flex:1, paddingLeft: 20, paddingRight: 20}}>

					<ScrollView
					    contentContainerStyle={{paddingBottom: 150}}
					>

						<View style={[styles.group, {paddingTop: 20}]}>
							<Text>To help with our research we ask that you answer the following questions.
								All data collected will be anonymous, see the About page for more details.</Text>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Anonymous identifier</Text>
							<Text style={{fontSize:20}}>{this.state.shortId}</Text>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Date of Birth</Text>
							<Text style={[styles.questionText]}>What is your date of birth? (YYYY-MM-DD)</Text>

							<DatePicker
								style={{
									//width: 200
								}}
								date={this.state.dateOfBirth}
								mode="date"
								placeholder="select date"
								format="YYYY-MM-DD"
								minDate="1895-01-01"
								maxDate="2014-12-31"
								confirmBtnText="Confirm"
								cancelBtnText="Cancel"
								customStyles={{}}
								onDateChange={
									(date) => this.setState({dateOfBirth:date},this.setDateOfBirth)
								}
							/>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Formal Music Training</Text>
							<Text style={[styles.questionText]}>How many years of formal music training have you had (including A-level and any instrumental, vocal or composition lessons)?</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ (option) => this.setState({musicTraining:option},this.setMusicTraining) }
								selectedOption={this.state.musicTraining }
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
							<Text style={[styles.label]}>Musical Field</Text>
							<Text style={[styles.questionText]}>Do you currently play a musical instrument, sing or compose, and if so for how many years? (Please select zero if you do not have any)</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ (option) => this.setState({musicField:option},this.setMusicField) }
								selectedOption={this.state.musicField }
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
							<Text style={[styles.label]}>Mathematical Training</Text>
							<Text style={[styles.questionText]}>How many years of formal mathematics training have you had (including A-level and any further study of mathematics)?</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ (option) => this.setState({mathTraining:option},this.setMathTraining) }
								selectedOption={this.state.mathTraining }
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
							<Text style={[styles.label]}>Mathematical Field</Text>
							<Text style={[styles.questionText]}>Do you currently work in a field which requires mathematical skills, and if so for how long have you worked in this area? (Please select zero if you do not work with mathematics)</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ (option) => this.setState({mathField:option},this.setMathField) }
								selectedOption={this.state.mathField}
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
							<Text style={[styles.label]}>Education</Text>
							<Text style={[styles.questionText]}>What is your highest level of formal qualification?</Text>
							<RadioSegmentedControls
								direction="column"
								options={ this.educationOptions }
								onSelection={ (option) => this.setState({education:option},this.setEducation) }
								selectedOption={this.state.education }
								tint={radioTint}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								paddingTop={10}
								paddingBottom={10}
								selectedBackgroundColor={MainColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
							<View style={{
								flex:1,
								flexDirection:'row',
								alignItems:'center',
								marginBottom: 5,
								marginTop: 20
							}}>
								<Text style={{
									flex:3,
									color: (this.state.education === this.educationOptions[this.educationOptionsOtherIndex]) ? '#333' : '#aaa',
								}}>{this.educationOptions[this.educationOptionsOtherIndex]}</Text>
								<View style={{flex:12,backgroundColor:inputBackgroundColor}}>
									<TextInput
										style={[styles.textInput, {
											width: '100%',
										}]}
										value={this.state.educationOther}
										onChangeText={ (text) => this.setState({educationOther:text},this.setEducationOther)}
										editable={ this.state.education === this.educationOptions[this.educationOptionsOtherIndex] }
									/>
								</View>
							</View>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Listening to Music</Text>
							<Text style={[styles.questionText]}>How often do you listen to music (of any style)?</Text>
							<RadioSegmentedControls
								direction="column"
								options={ [
									'Never', 'Occasionally', 'Sometimes', 'Most days', 'Every day'
								] }
								onSelection={ (option) => this.setState({musicListen:option},this.setMusicListen) }
								selectedOption={this.state.musicListen }
								tint={radioTint}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								paddingTop={10}
								paddingBottom={10}
								selectedBackgroundColor={MainColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Optional</Text>
							<Text style={[styles.questionText]}>If you'd like to be notified of the results from this study you can enter your email here:</Text>
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
								<Text style={[styles.buttonText]}>Finished</Text>
							</Icon.Button>
						</View>

					</ScrollView>
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