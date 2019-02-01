import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native"
import { SegmentedControls as RadioSegmentedControls } from 'react-native-radio-buttons'

import QuestionBase from "./questionBase";

import { MainBackgroundColor as MainColor, InputBackgroundColor } from "../../style/index";
const inputBackgroundColor = InputBackgroundColor;
const radioTint = '#555';
//import Icon from 'react-native-vector-icons/Entypo';

export default class QuestionRadio extends Component {

	constructor() {
		super();

		this.textEntry = false;
		this.textEntryOption = "";
		this.direction = "row";

		this.state = {
			selected: ""
		}
	}

	render() {
		if( this.props.direction ) {
			this.direction = this.props.direction;
		}
		if( this.props.textEntry ) {
			this.textEntry = this.props.textEntry;
			if( this.props.textEntryOption ) {
				this.textEntryOption = this.props.textEntryOption;
			}
		}

		return (
			<QuestionBase
				title={this.props.title}
				text={this.props.text}
			>
				<RadioSegmentedControls
					direction={this.direction}
					options={ this.props.options }
					onSelection={ (option) => {
						this.setState( {selected:option} );
						if (this.props.onChange) {
							this.props.onChange(option)
						}
					}}
					selectedOption={this.props.value}
					tint={radioTint}
					selectedTint={'white'}
					backTint= {inputBackgroundColor}
					paddingTop={10}
					paddingBottom={this.direction === "row" ? 25 : 10 }
					selectedBackgroundColor={MainColor}

					//renderOption={ this.renderOption }
					//renderContainer={ this.renderContainer }
				/>
				{
					(this.textEntry) ?
						<View style={{
							flex:1,
							flexDirection:'row',
							alignItems:'center',
							marginBottom: 5,
							marginTop: 20
						}}>
							<Text style={{
								flex:3,
								color: (this.state.selected === this.textEntryOption) ? '#333' : '#aaa',
							}}>{this.textEntryOption}</Text>
							<View style={{flex:12,backgroundColor:inputBackgroundColor}}>
								<TextInput
									style={{
										borderWidth: 1,
										borderColor: '#ccc',
										padding: 5,
										width: '100%',
									}}
									value={this.props.textEntryValue}
									onChangeText={ (text) =>{
										if( this.props.textEntryOnChange ) {
											this.props.textEntryOnChange(text);
										}
									}}
									editable={ this.state.selected === this.textEntryOption }
								/>
							</View>
						</View>
					:
						<Text/>
				}
				{this.props.children}
			</QuestionBase>
		);
	}
}