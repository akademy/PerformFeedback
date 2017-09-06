import React, { Component } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native"

import TemplateBase from './templateBase'

export default class Licences extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "PRiSM Perception App"
	});

	render() {
		const { navigate } = this.props.navigation;

		return (
			<TemplateBase mainTitle="Licences" subTitle="Open source licences requirements.">
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

						<Text style={[styles.paragraph,styles.text]}>
							BSD License{'\n'}
							{'\n'}
							For React software{'\n'}
							{'\n'}
							Copyright (c) 2013-present, Facebook, Inc. All rights reserved.{'\n'}
							{'\n'}
							Redistribution and use in source and binary forms, with or without modification,
							are permitted provided that the following conditions are met:{'\n'}
							{'\n'}
							* Redistributions of source code must retain the above copyright notice, this
							list of conditions and the following disclaimer.{'\n'}
							{'\n'}
							* Redistributions in binary form must reproduce the above copyright notice,
							this list of conditions and the following disclaimer in the documentation
							and/or other materials provided with the distribution.{'\n'}
							{'\n'}
							* Neither the name Facebook nor the names of its contributors may be used to
							endorse or promote products derived from this software without specific
							prior written permission.{'\n'}
							{'\n'}
							THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
							ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
							WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
							DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
							ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
							(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
							LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
							ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
							(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
							SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}
						</Text>

						<Text style={[styles.paragraph,styles.text]}>
							BSD License{'\n'}
							{'\n'}
							For React Native software{'\n'}
							{'\n'}
							Copyright (c) 2015-present, Facebook, Inc. All rights reserved.{'\n'}
							{'\n'}
							Redistribution and use in source and binary forms, with or without modification,
							are permitted provided that the following conditions are met:{'\n'}
							{'\n'}
							* Redistributions of source code must retain the above copyright notice, this
							list of conditions and the following disclaimer.{'\n'}
							{'\n'}
							* Redistributions in binary form must reproduce the above copyright notice,
							this list of conditions and the following disclaimer in the documentation
							and/or other materials provided with the distribution.{'\n'}
							{'\n'}
							* Neither the name Facebook nor the names of its contributors may be used to
							endorse or promote products derived from this software without specific
							prior written permission.{'\n'}
							{'\n'}
							THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
							ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
							WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
							DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
							ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
							(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
							LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
							ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
							(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
							SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.	{'\n'}
						</Text>

						<Text style={[styles.paragraph,styles.text]}>
							BSD License{'\n'}
							{'\n'}
							For React Navigation software{'\n'}
							{'\n'}
							Copyright (c) 2016-present, React Navigation Contributors. All rights reserved.{'\n'}
							{'\n'}
							Redistribution and use in source and binary forms, with or without modification,
							are permitted provided that the following conditions are met:{'\n'}
							{'\n'}
							* Redistributions of source code must retain the above copyright notice, this{'\n'}
							list of conditions and the following disclaimer.{'\n'}
							{'\n'}
							* Redistributions in binary form must reproduce the above copyright notice,
							this list of conditions and the following disclaimer in the documentation
							and/or other materials provided with the distribution.{'\n'}
							{'\n'}
							THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
							ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
							WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
							DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
							ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
							(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
							LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
							ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
							(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
							SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.{'\n'}
						</Text>

						<Text style={[styles.paragraph,styles.text]}>And thanks to all those who generously release under the MIT licence.</Text>
					</ScrollView>
				</View>

			</TemplateBase>
		);
	}
}

const styles = StyleSheet.create({
	paragraph: {
		paddingBottom: 20,
		marginBottom: 20,
		paddingRight: 10,
		paddingLeft: 10,
		borderBottomWidth: 2
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