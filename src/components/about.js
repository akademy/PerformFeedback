import React, { Component } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native"

import TemplateBase from './templateBase'

export default class About extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "PRiSM Audience App"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="About" subTitle="Details on the Audience App">
				<View style={{
					flex: 1,
					paddingLeft: 20,
					paddingRight: 20,
				}}>
					<ScrollView
						contentContainerStyle={{
							paddingTop:30,
							paddingBottom: 40
						}}
					>
						<Text style={[
							styles.paragraph,
							{fontSize:16}
						]}>Welcome to the PRiSM Audience App.</Text>

						<Text style={[styles.paragraph]}>The PRiSM Audience App is a generic tool that can be configured for different concerts, presentations and experiments. The data gathered will be analysed to explore what mathematics the listener may be hearing.</Text>

						<Text style={[styles.paragraph]}>The World Premiere of the PRiSM Audience App will take place on the 4th October 2017 at the RNCM in Manchester. More details can be found at <Text style={{color: 'blue',textDecorationLine:'underline'}}  onPress={() => Linking.openURL('https://www.rncm.ac.uk/performance/the-music-of-proof/')}>www.rncm.ac.uk</Text>.</Text>

						<Text style={[styles.paragraph]}>All data collected is anonymous and only identifiable by a randomly generated ID.</Text>

						<Text style={[styles.paragraph]}>This interactive app is being developed in collaboration with the EPRSC ‘Fusing Audio and Semantic Technologies’ project. See <Text style={{color:'blue',textDecorationLine:'underline'}}  onPress={() => Linking.openURL('http://www.semanticaudio.ac.uk/')}>www.semanticaudio.ac.uk</Text>.</Text>
						<View style={{
							width:'100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						>
							<Image style={[styles.paragraph,{height:80,width: 200,marginRight:20}]} source={require('./img/PRiSM_purple_1.png')} />
							<Image style={[styles.paragraph,{height:94,width: 200,marginRight:20}]} source={require('./img/RGB-Logo-Pair.png')} />
							<Image style={[styles.paragraph,{height:80,width: 200,marginRight:20}]} source={require('./img/sponsorfullres.png')} />
						</View>
					</ScrollView>
				</View>
			</TemplateBase>
		);
	}
}

const styles = StyleSheet.create({
	paragraph: {
		marginBottom: 20,
		paddingRight: 10,
		paddingLeft: 10
	},
});