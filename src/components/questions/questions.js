import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import { SegmentedControls as RadioSegmentedControls } from 'react-native-radio-buttons'
import CheckboxGroup from 'react-native-checkbox-group'
import Icon from 'react-native-vector-icons/Ionicons'

import TemplateBase from '../templateBase'

const inputBackgroundColor = '#f5f5f5';

export default class Questions extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Questions"
	});

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
			<TemplateBase mainTitle="Questions" subTitle="To be answered after the performance">
				<View style={{flex:1,paddingRight: 20,paddingLeft:20}}>
					<ScrollView>

						<View style={[styles.question, {marginTop:20}]}>
							<Text style={[styles.label]}>Q1</Text>
							<Text style={[styles.questionText]}>How long did you think that the piece of music lasted?</Text>
							<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
								<View style={{backgroundColor:inputBackgroundColor}}>
									<TextInput
										style={{width: 30, fontSize:20}}
										editable={true}
										keyboardType='numeric'
										placeholder="00"
									/>
								</View>
								<Text> Minutes </Text>
								<View style={{backgroundColor:inputBackgroundColor}}>
									<TextInput
										style={{width: 30, fontSize:20}}
										editable={true}
										keyboardType='numeric'
										placeholder="00"
									/>
								</View>
								<Text style={{}}> Seconds</Text>
							</View>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Q2</Text>
							<Text style={[styles.questionText]}>Please describe the piece in three words:</Text>
							<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
								<Text>1 </Text>
								<View style={{width: '90%',backgroundColor:inputBackgroundColor}}>
									<TextInput
										style={{width:'100%'}}
									/>
								</View>
							</View>
							<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
								<Text>2 </Text>
								<View style={{width: '90%',backgroundColor:inputBackgroundColor}}>
									<TextInput
										style={{width: '100%'}}
									/>
								</View>
							</View>
							<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
								<Text>3 </Text>
								<View style={{width: '90%',backgroundColor:inputBackgroundColor}}>
									<TextInput
										style={{width: '100%'}}
									/>
								</View>
							</View>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Q3</Text>
							<Text style={[styles.questionText]}>What features in the piece influenced your choice of section endings?</Text>
							<View style={{width: '90%',backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={{width: '100%'
									}}
									multiline={true}
									numberOfLines={3}
								/>
							</View>
						</View>

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Q4</Text>
							<Text style={[styles.questionText]}>How much did you enjoy the piece of music?</Text>
							<Text style={[styles.key]}>
								<Text><Text style={{fontWeight:'bold'}}>1</Text> : I didn't enjoy it at all</Text>{'\n'}
								<Text><Text style={{fontWeight:'bold'}}>7</Text> : I enjoyed it a lot</Text>
							</Text>
							<RadioSegmentedControls
								options={ [1,2,3,4,5,6,7] }
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
							<Text style={[styles.label]}>Q5</Text>
							<Text style={[styles.questionText]}>As a listener, how familiar are you with twentieth-century classical music?</Text>
							<Text style={[styles.key]}>
								<Text><Text style={{fontWeight:'bold'}}>1</Text> : I am not familiar with it at all</Text>{'\n'}
								<Text><Text style={{fontWeight:'bold'}}>7</Text> : I am very familiar with it</Text>
							</Text>

							<RadioSegmentedControls
								options={ [1,2,3,4,5,6,7] }
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
							<Text style={[styles.label]}>Q6</Text>
							<Text style={[styles.questionText]}>Does participation in a scientific experiment such as this increase or decrease your enjoyment of a concert experience?</Text>
							<Text style={[styles.key]}>
								<Text><Text style={{fontWeight:'bold'}}>1</Text> : It significantly decreases my enjoyment</Text>{'\n'}
								<Text><Text style={{fontWeight:'bold'}}>7</Text> : It significantly increases my enjoyment</Text>
							</Text>
							<RadioSegmentedControls
								options={ [1,2,3,4,5,6,7] }
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
							<Text style={[styles.label]}>Q7</Text>
							<Text style={[styles.questionText]}>What motivated you to come to tonight's event? (Select all that apply)</Text>
							<CheckboxGroup
								callback={(selected) => { console.log(selected) }}
								iconColor={"steelblue"}
								iconSize={30}
								checkedIcon="ios-checkbox-outline"
								uncheckedIcon="ios-square-outline"
								checkboxes={[
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

						<View style={[styles.question]}>
							<Text style={[styles.label]}>Q8</Text>
							<Text style={[styles.questionText]}>Please use this box for any other comments you wish to make.</Text>
							<View style={{width: '90%', backgroundColor:inputBackgroundColor}}>
							<TextInput
								style={{width: '100%'}}
							    multiline={true}
							    numberOfLines={3}
							/>
							</View>
						</View>


					</ScrollView>
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
		paddingBottom: 10
	},
	key: {
		paddingBottom: 10,
		paddingLeft: 10
	},
	input: {
		backgroundColor: 'red'
	}
});