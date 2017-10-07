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
  TouchableOpacity,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation'
const instructions = Platform.select({
  ios: 'ios\n',
  android: 'Android\n',
});

export default class Logon extends Component<{}> {
  static navigationOptions = {
    gesturesEnabled: false,
    lockMode: 'locked-closed',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          This is LOGON screen in {instructions}
        </Text>
        <View>
          <TouchableOpacity onPress={ () => this.onLogin() }>
            <Text>Login</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={ () => this.onRegister() }>
              <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.onForgotPassword() }>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  onLogin() {
    console.log('Login button tapped');
    const navigateAction = NavigationActions.navigate({

      routeName: 'MainStack',

      params: {},

      action: NavigationActions.navigate({ routeName: 'Home'})
    })

    // this.props.navigation.dispatch(navigateAction)
    this.props.navigation.navigate('MainStack')
  }

  onRegister() {
    console.log('Register button tapped');
    console.dir(this.props);
    this.props.navigation.navigate('Signup');
  }

  onForgotPassword() {
    console.log('ForgotPassword button tapped');
    this.props.navigation.navigate('ForgotPassword');
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
