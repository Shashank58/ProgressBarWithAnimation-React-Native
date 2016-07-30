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
        <ProgressBarAnimated
            progress={70}
            progressBarStyle={{borderWidth: 1, margin: 16, height: 14}}
            fillColor='red'
            unfilledColor='white'
            />
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
});

AppRegistry.registerComponent('ProgressBar', () => ProgressBar);
