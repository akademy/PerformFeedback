import React, { Component } from 'react'
import {FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native"
import Button from 'apsl-react-native-button'

import TemplateBase from '../templateBase'

import {NAVIGATION as N} from "../../constants";
import { Console as C } from "../../lib/console"

export default class Location extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Location"
	});

	constructor(props) {
		super(props);
		this.state = {
			selectedKey: props.performanceId, //"oxfordJanuary2018"
			performances: []
		};
	}

	componentWillMount() {
		let performanceIds = new Set();

		C.log("feedback length", this.props.feedbacks.length);

		for( let i=0, z=this.props.feedbacks.length; i<z; i++ ) {
			let performanceId = this.props.feedbacks[i].performanceId;
			if( !performanceId ) {
				// There should always be a feedback ID, except in the case of the very first use of the app
				performanceId = "manchester2017" // special case
			}
			C.log(this.props.feedbacks[i],this.props.feedbacks[i].performanceId)
			performanceIds.add( this.props.feedbacks[i].performanceId );
		}
		C.log("performance id length",performanceIds.size, performanceIds);
		C.log("performances length", this.props.performances.length, this.props.performances);

		let performances = [];
		performanceIds.forEach( (id) => {
			for( let i=0, z=this.props.performances.length; i<z; i++ ) {
				if( this.props.performances[i].key === id ) {
					performances.push(this.props.performances[i]);
				}
			}
		} );

		this.setState({performances});
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase
				icon="note"
				mainTitle="Performance Location" subTitle="Where were you?"
			>
				<View style={+{flex:1,padding: 20}}>
					<Text style={[styles.paragraph,styles.text]}>Please select the performance you have previously attended from the list below:</Text>
					<View style={{
						height:200,
						margin:10,
						borderWidth:1,
						borderColor:'#999'
					}}>
					<FlatList
						data={this.state.performances}
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
							navigate(N.QUESTIONS);
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