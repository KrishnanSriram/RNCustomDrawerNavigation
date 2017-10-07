/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'ios\n',
  android: 'Android\n',
});

export default class About extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          This is ABOUT screen in {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
