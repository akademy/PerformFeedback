
import React, { Component } from 'react';
import { View, Text } from "react-native"

import Icon from 'react-native-vector-icons/Entypo';

export default class TemplateBase extends Component {

	render() {

		return (
			<View style={{
				flex: 1
			}}>
				<View style={{
					flex: 2,
					backgroundColor: "steelblue",
					flexDirection: 'row',
					justifyContent: 'center'
				}}>
					<View style={{
						flexDirection: 'column',
						justifyContent: 'center',
						flex: 1,
						paddingLeft: 40
					}}>
						<Icon name={this.props.icon} size={50} color="#3e5da0"/>
					</View>

					<View style={{
						flexDirection: 'column',
						justifyContent: 'center',
						flex: 4
					}}>

						<Text style={{fontWeightr:"bold",fontSize:20,color:"#fff",textAlign: "left"}}>
							{this.props.mainTitle}
						</Text>
						<Text style={{fontSize:14,color:"white",textAlign: "left"}}>
							{this.props.subTitle}
						</Text>
					</View>
				</View>

				<View style={{
					flex: 7
				}}>
					{this.props.children}
				</View>
			</View>
		);
	}
}