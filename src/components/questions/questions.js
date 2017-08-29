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
				<View style={{flex:1,padding: 20}}>
					<ScrollView>
						<View style={[styles.group]}>
							<Text style={[styles.label]}>Anonymous identifier:</Text>
							<Text style={{fontSize:20}}>C10-URT</Text>
						</View>

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Q15 Text</Text>
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
										label: "I re about music and maths working together",
										value: 2
									},
									{
										label: "I are bahs working together",
										value: 3
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

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Q13,Q14,Q16 Text</Text>
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

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Q10 Time</Text>
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

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Q11 Text</Text>

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

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Q12 Text</Text>
							<View style={{width: '90%',backgroundColor:inputBackgroundColor}}>
							<TextInput
								style={{width: '100%'
								}}
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
	group: {
		marginBottom: 20,
		flex: 1
	},
	label: {
		fontWeight: "bold"
	},
	input: {
		backgroundColor: 'red'
	}
});