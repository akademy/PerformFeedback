import React, { Component } from 'react';
import { View, Button, Text } from "react-native"

import TemplateBase from './templateBase'
import { NAVIGATION as N } from '../constants'
import { Console as C } from "../lib/console"

export default class Home extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		//title: `${screenProps.build} Home (Home)`
		title: "Home"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="PRiSM Perception App" subTitle="Feedback during performances">
				<View style={{
					//backgroundColor: 'green',
					padding:50,
					flex: 1,
				}}
				>
					<View style={{
						height:250, // Divide the buttons into this space
					}}
					>
						<View style={{
							//backgroundColor: 'red',
							flex: 1,
							flexDirection: 'column',
							justifyContent: 'space-between',
						}}
						>
							<Button
								title="About this app"
								onPress={ ()=>{navigate(N.ABOUT)} }
							/>
							<Button
								title="Your profile"
								onPress={ ()=>{navigate(N.PROFILE)} }
							/>
							<Button
								accessibilityLabel="Select a performance"
								title="Performances"
								onPress={ ()=>{ navigate(N.PERFORMANCE_BEGIN)} }
							/>
							<Button
								disabled={!this.props.performanceId || !this.props.feedbackId}
								title="Questions on performance"
								onPress={ ()=>{navigate(N.QUESTIONS)} }
							/>
							{/*__DEV__ &&
								<Button
									title="Purge Persist"
									onPress={() => {
										C.warn("Purging the persistant data");
										this.props.screenProps.persister.purge();
									}}
								/>
							*/}
						</View>
					</View>

				</View>
			</TemplateBase>
		);

	}
}