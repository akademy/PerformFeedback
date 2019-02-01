import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native"
import DatePicker from 'react-native-datepicker'
import QuestionBase from "./questionBase";
//import Icon from 'react-native-vector-icons/Entypo';

export default class QuestionDate extends Component {

	render() {

		return (
			<QuestionBase
				title={this.props.title}
				text={this.props.text}
			>
				<DatePicker
					style={{ /*width: 200*/ }}
					date={this.props.value}
					mode="date"
					placeholder="select date"
					format="YYYY-MM-DD"
					minDate="1895-01-01"
					// maxDate="2014-12-31"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{}}
					onDateChange={
						(date) => {
							if(this.props.onChange){
								this.props.onChange(date)
							}
						}
					}
				/>
				{this.props.children}
			</QuestionBase>
		);
	}
}