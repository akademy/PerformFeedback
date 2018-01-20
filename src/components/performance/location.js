import React, { Component } from 'react'
import {FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native"
import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'

import {NAVIGATION as N} from "../../constants";

export default class Location extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Location"
	});

	constructor(props) {
		super(props);
		this.state = {
			selectedKey: props.performanceId //"oxfordJanuary2018"
		};
	}

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase
				icon="note"
				mainTitle="Performance Location" subTitle="Where are you?"
			>
				<View style={{flex:1,padding: 20}}>
					<Text style={[styles.paragraph,styles.text]}>Please select the performance your are currently attending from the list below:</Text>
					<View style={{
						height:200,
						margin:10,
						borderWidth:1,
						borderColor:'#999'
					}}>
					<FlatList
						data={this.props.performances}
						keyExtractor={ (item) => item.key}
						extraData={this.state.selectedKey}
						renderItem={ ({item}) =>
							<TouchableHighlight
								onPress={() => this.setState({selectedKey:item.key}) }
								underlayColor='#ddd'
							>

								<View style={{
									backgroundColor: (item.key === this.state.selectedKey) ? 'black' : 'transparent',
									padding: 10
								}}>
									<Text style={{
										fontWeight:'bold',
										color: (item.key === this.state.selectedKey) ? 'white' : 'black',
									}}>{item.title}</Text>
									<Text style={{
										color: (item.key === this.state.selectedKey) ? 'white' : 'black',
									}}>{item.date}</Text>
								</View>
							</TouchableHighlight>
						}/>
					</View>
					<Button
						style={{
							backgroundColor: '#1ddd6a',
							borderColor: '#1db259',
							height: 50,
							marginTop: 10
						}}
						textStyle={{
							color: '#fff',
							fontSize: 18
						}}
						onPress={ () => {
							if( this.props.setCurrentPerformanceId ) {
								this.props.setCurrentPerformanceId(this.state.selectedKey);
							}
							navigate(N.PERFORMANCE_BEGIN);
						}}
						isDisabled={this.state.selectedKey===null}
					>Proceed</Button>
				</View>
			</TemplateBase>
		);
	}
}

const styles = StyleSheet.create({
	paragraph: {
		marginBottom: 20,
		paddingRight: 10,
		paddingLeft: 10,
	},
	text: {
		lineHeight: 24,
		fontSize: 16
	},
	title: {
		lineHeight: 30,
		fontSize: 20,
		textAlign: "center"
	}
});