
import React, { Component } from 'react';
import { View, Button, Text } from "react-native"

export default class Count extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Count"
	});

	render() {
		return (
			<View style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'center'
			}}>
				<Button
					title="Add One"
					onPress={ ()=>{
						if( this.props.onAddOne ) {
							this.props.onAddOne(this.props.count+1);
						}
					} }
				/>
				<Button
					title="Reset"
					onPress={ ()=>{
						if( this.props.onResetCount ) {
							this.props.onResetCount();
						}
					} }
				/>
				<Button
					title="From server"
					onPress={ ()=>{
						if( this.props.onRequestCount ) {
							this.props.onRequestCount();
						}
					} }
				/>
				<Text style={{fontSize:28}}>Count is: {this.props.count}</Text>
			</View>
		);
	}
}