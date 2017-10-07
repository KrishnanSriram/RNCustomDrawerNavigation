import React, { Component } from 'react';
import { ScrollView, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Drawer extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1, marginTop:50, marginLeft:10, marginRight: 20,}}>
        <TouchableHighlight style={styles.lineItem} onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.lineItemText}>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.lineItem} onPress={() => this.props.navigation.navigate('Search')}>
          <Text style={styles.lineItemText}>Search</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.lineItem} onPress={() => this.props.navigation.navigate('Saved')} >
          <Text style={styles.lineItemText}>Saved</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.lineItem} onPress={() => this.props.navigation.navigate('About')} >
          <Text style={styles.lineItemText}>About</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.lineItem} onPress={() => this.props.navigation.navigate('PreAuthStack')} >
          <Text style={styles.lineItemText}>LogOff</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  lineItem: {
    borderBottomColor: 'lightgray',
    borderWidth: 1,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,
  },
  lineItemText: {
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    margin: 10,
  },
});