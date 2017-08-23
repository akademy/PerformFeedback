import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from "react-native"

import TemplateBase from './templateBase'
import DatePicker from 'react-native-datepicker'
export default class Profile extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Profile"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Profile" subTitle="Your details">
				<View style={{flex:1,padding: 20}}>

					<ScrollView style={{
						//backgroundColor: 'red',
						//flex: 1,
						//flexDirection: 'column',
						//justifyContent: 'flex-start',
						//padding: 30
					}}
					>
						<View style={[styles.group]}>
							<Text>To help with our research we ask that you answer the following questions. All data collected will be anonymous.</Text>
						</View>

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Anonymous identifier:</Text>
							<Text style={{fontSize:20}}>{this.props.id}</Text>
						</View>

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Date of Birth:</Text>
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

						<View style={[styles.group]}>
							<Text style={[styles.label]}>Profile:</Text>
							<Text>ru:{this.props.profile.randomUuid}</Text>
							<Text>ri:{this.props.profile.randomId}</Text>
							<Text>dob:{this.props.profile.dateOfBirth}</Text>
						</View>
					</ScrollView>
				</View>
			</TemplateBase>
		);
	}
}

var styles = StyleSheet.create({
	group: {
		marginBottom: 20
	},
	label: {
		fontWeight: "bold"
	}
});