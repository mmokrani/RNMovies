import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Navigation from './Navigation/Navigation';
import reducer from './Reducers'

export default class App extends Component {
  //<View><Text>Test</Text></View>
  render() {
    return (
      <Navigation
       />

    )
 }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
