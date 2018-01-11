import React, { Component } from 'react'
import {Text, TouchableHighlight, View} from "react-native"

import TemplateBase from '../templateBase'
import ListViewSelect from "react-native-list-view-select";

export default class Location extends Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "Location"
	});

	constructor(props) {
		super(props);
		this.state = {
			item: "Item 1",
			isVisible: false,
		};
		//_.bindAll(this, ['showPopover', 'closePopover', 'setItem']);
	}



	render() {
		const { navigate } = this.props.navigation;
		const items = [
			"Item 1",
			"Item 2",
			"Item 3",
			"Item 4",
		];

		return (
			<TemplateBase
				icon="note"
				mainTitle="Performance Location" subTitle="Where are you?">
				<View>
					<TouchableHighlight onPress={this.showPopover}>
						<Text>{this.state.item}</Text>
					</TouchableHighlight>
					<ListViewSelect
						list={items}
						isVisible={this.state.isVisible}
						onClick={this.setItem}
						onClose={this.closePopover}
					/>
				</View>
			</TemplateBase>
		);
	}
}