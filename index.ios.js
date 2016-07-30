/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ProgressBarAnimated from './ProgressBarAnimated'

class ProgressBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAnimated progress={50}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
})

AppRegistry.registerComponent('ProgressBar', () => ProgressBar);
