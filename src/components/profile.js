import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from "react-native"

import { SegmentedControls as RadioSegmentedControls } from 'react-native-radio-buttons'

import TemplateBase from './templateBase'
import DatePicker from 'react-native-datepicker'

const inputBackgroundColor = '#f5f5f5';

export default class Profile extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Profile"
	});

	componentWillUnmount = () => {
		if( this.props.onSyncProfile ) {
			this.props.onSyncProfile();
		}
	};

	state={
		selectionOption:null
	};

	setSelectedOption = (selectedOption)=>{
		this.setState({
			selectedOption
		});
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Profile" subTitle="Your details">
				<View style={{flex:1, paddingLeft: 20, paddingRight: 20}}>

					<ScrollView style={{
						//backgroundColor: 'red',
						//flex: 1,
						//flexDirection: 'column',
						//justifyContent: 'flex-start',
						//padding: 30
					}}
					>
						<View style={[styles.group, {paddingTop: 20}]}>
							<Text>To help with our research we ask that you answer the following questions. All data collected will be anonymous, data collected will only be identified by the identifier below.</Text>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Anonymous identifier</Text>
							<Text style={{fontSize:20}}>{this.props.id}</Text>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Date of Birth</Text>
							<Text style={[styles.questionText]}>What is your date of birth? (YYYY-MM-DD)</Text>

							<DatePicker
								style={{
									//width: 200
								}}
								date={this.props.dateOfBirth}
								mode="date"
								placeholder="select date"
								format="YYYY-MM-DD"
								minDate="1895-01-01"
								maxDate="2014-12-31"
								confirmBtnText="Confirm"
								cancelBtnText="Cancel"
								customStyles={{}}
								onDateChange={(date) => {
									if( this.props.onDateOfBirth ) {
										this.props.onDateOfBirth( date );
									}
								}}
							/>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Formal Music Training</Text>
							<Text style={[styles.questionText]}>How many years of formal music training have you had (including A-level and any instrumental, vocal or composition lessons)?</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ this.setSelectedOption.bind(this) }
								selectedOption={this.state.selectedOption }
								tint={'steelblue'}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
						</View>


						<View style={[styles.question]}>
							<Text style={[styles.label]}>Musical Field</Text>
							<Text style={[styles.questionText]}>Do you currently play a musical instrument, sing or compose, and if so for how long? (Please select zero if you do not)</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ this.setSelectedOption.bind(this) }
								selectedOption={this.state.selectedOption }
								tint={'steelblue'}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Mathematical Training</Text>
							<Text style={[styles.questionText]}>How many years of formal mathematics training have you had (including A-level and any further study of mathematics)?</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ this.setSelectedOption.bind(this) }
								selectedOption={this.state.selectedOption }
								tint={'steelblue'}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
						</View>


						<View style={[styles.question]}>
							<Text style={[styles.label]}>Mathematical Field</Text>
							<Text style={[styles.questionText]}>Do you currently work in a field which requires mathematical skills, and if so for how long have you worked in this area? (Please select zero if you do not work with mathematics)</Text>
							<RadioSegmentedControls
								options={ [0,1,2,3,4,5,6,7,8,9,"10+"] }
								onSelection={ this.setSelectedOption.bind(this) }
								selectedOption={this.state.selectedOption }
								tint={'steelblue'}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Education</Text>
							<Text style={[styles.questionText]}>What is your highest level of formal qualification?</Text>
							<RadioSegmentedControls
								direction="column"
								options={ [
									'GCSEs', 'A-levels', "Bachelor's Degree", 'Masters Degree', 'PhD', 'Other'
								] }
								onSelection={ this.setSelectedOption.bind(this) }
								selectedOption={this.state.selectedOption }
								tint={'steelblue'}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
							<Text>TODO: ADD Other option</Text>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Listening to Music</Text>
							<Text style={[styles.questionText]}>How often do you listen to music (of any style)?</Text>
							<RadioSegmentedControls
								direction="column"
								options={ [
									'Never', 'Occasionally', 'Sometimes', 'Most days', 'Every day'
								] }
								onSelection={ this.setSelectedOption.bind(this) }
								selectedOption={this.state.selectedOption }
								tint={'steelblue'}
								selectedTint={'white'}
								backTint= {inputBackgroundColor}
								//renderOption={ this.renderOption }
								//renderContainer={ this.renderContainer }
							/>
						</View>

						{/* <View style={[styles.group]}>
							<Text style={[styles.label]}>Profile:</Text>
							<Text>ru:{this.props.profile.randomUuid}</Text>
							<Text>ri:{this.props.profile.randomId}</Text>
							<Text>dob:{this.props.profile.dateOfBirth}</Text>
						</View>*/}
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
		paddingBottom: 10
	}
});