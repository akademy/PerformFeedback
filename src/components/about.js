import React, { Component } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native"

import TemplateBase from './templateBase'
import {NAVIGATION as N} from "../constants";

export default class About extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "PRiSM Perception App"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="About" subTitle="The PRiSM Perception App">
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
						<Text style={[styles.paragraph,styles.title]}>
							Welcome to the
							PRiSM Perception App.
						</Text>

						<Text style={[styles.paragraph,styles.text]}>
							The PRiSM Perception App is a generic tool that can be configured for different concerts, presentations and experiments. The data gathered will be analysed to explore what mathematics the listener may be hearing.
						</Text>

						<Text style={[styles.paragraph,styles.text]}>
							The World Premiere of the PRiSM Perception App will take place on the 4th October 2017 at the RNCM in Manchester. More detail about PRiSM at the RNCM can be found <Text style={{color: 'blue',textDecorationLine:'underline'}}  onPress={() => Linking.openURL('https://www.rncm.ac.uk/performance/the-music-of-proof/')}>here</Text>. More details on the October event can be found <Text style={{color: 'blue',textDecorationLine:'underline'}}  onPress={() => Linking.openURL('https://www.rncm.ac.uk/performance/the-music-of-proof/')}>here</Text>.
						</Text>

						<Text style={[styles.paragraph,styles.text]}>
							Please note: Your participation in this experiment is voluntary, but by responding to the questions in this app, you are giving consent for your data to be included in the experiment. However, you may withdraw from the research at any time and for any reason, please let us know.</Text>

						<Text style={[styles.paragraph,styles.text]}>
						Your responses will be treated with full confidentiality and if results are published responses will not be identifiable as yours. All data is recorded anonymously (no names are collected by the app).”.
						</Text>

						<Text style={[styles.paragraph,styles.text]}>
							This interactive app is being developed in collaboration with the EPRSC ‘Fusing Audio and Semantic Technologies’ project. See <Text style={{color:'blue',textDecorationLine:'underline'}}  onPress={() => Linking.openURL('http://www.semanticaudio.ac.uk/')}>www.semanticaudio.ac.uk</Text>.
						</Text>

						<View style={{
							width:'100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						>
							<Image style={[styles.paragraph,{height:80,width: 200,marginRight:20}]} source={require('./img/sponsorfullres.png')} />

							<Image style={[styles.paragraph,{height:80,width: 200,marginRight:20}]} source={require('./img/fast.png')} />

							<Image style={[styles.paragraph,{height:94,width: 200,marginRight:20,marginBottom:30}]} source={require('./img/RGB-Logo-Pair.png')} />

							<Image style={[styles.paragraph,{height:80,width: 200,marginRight:20}]} source={require('./img/PRiSM_purple_1.png')} />

							<Image style={[styles.paragraph,{height:135,width: 200,marginRight:20}]} source={require('./img/RNCMlogoCOLOUR.png')} />
						</View>

						<Text>Thanks also to the React-Native Community, including but not limited to: alvaromb, akademy, akadius.one, arnaudrinquin, ataomega, eugenehp, jacklam, jamesisaac, js-media, oblador and skevy, for making this App possible.</Text>

						<Text style={{color:'blue',textDecorationLine:'underline',marginTop:20}}  onPress={() => {navigate(N.LICENCES)} }>
							Open source licences.
					</Text>

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