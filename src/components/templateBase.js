
import React, { Component } from 'react';
import { View, Text } from "react-native"

export default class TemplateBase extends Component {

	render() {

		return (
			<View style={{
				flex: 1
			}}>
				<View style={{
					flex: 2,
					backgroundColor: "steelblue",
					flexDirection: 'column',
					justifyContent: 'center',
					paddingLeft: 50
				}}>
					<Text style={{fontSize:20,color:"white",textAlign: "left"}}>
						{this.props.mainTitle}
					</Text>
					<Text style={{fontSize:14,color:"white",textAlign: "left"}}>
						{this.props.subTitle}
					</Text>
				</View>

				<View style={{
					flex: 5
				}}>
					{this.props.children}
				</View>
			</View>
		);
	}
}