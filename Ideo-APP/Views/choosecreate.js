import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { styles } from '../Styles/styles.js'

export default class ChooseCreate extends Component {
  static navigationOptions = {
    header: null
  };
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}
            onPress={this._onPressButton}
            title="Create new Ideaspace"
            color="#1ac5c3"
          />
        </View>
      </View>
    )
  }
}
