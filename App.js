/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Search from "./src/screens/search";
import Result from "./src/screens/result";
import SavedWord from "./src/screens/savedword";
import About from "./src/screens/about";
import Drawer from "./src/components/drawer";
import Logon from "./src/screens/logon";
import ContactUs from "./src/screens/contactus";
import ForgotPassword from "./src/screens/forgot_password";
import Signup from "./src/screens/signup";
import Home from "./src/screens/home";

export const PreAuthStack = StackNavigator({
  Logon: { screen: Logon ,
    navigationOptions:{
      title:'Login',
    }},
  ContactUs: { screen: ContactUs,
    navigationOptions:{
      title:'Contact Us',
    } },
  ForgotPassword: { screen: ForgotPassword,
    navigationOptions:{
      title:'Forgot Password',
    } },
  Signup: { screen:Signup,
    navigationOptions:{
      title:'SignUp',
    } },
}, {
  headerMode: 'screen'
});

export const MainNavigator = DrawerNavigator({
  Home: {
    screen: StackNavigator({
      Home: {
        screen: Home,
        navigationOptions:{
          title:'Home',
        }
      },
    })
  },
  Search: {
    screen: StackNavigator({
      Search: {
        screen: Search,
        navigationOptions:{
          title:'Search',
        }
      },
      Result: {
        screen: Result,
        navigationOptions:{
          title:'Result',
        }
      }
    })
  },
  Saved: {
    screen: StackNavigator({
      SavedStack: {
        screen: SavedWord,
        navigationOptions:{
          title:'Saved Word',
        }
      }
    })
  },
  About: {
    screen: StackNavigator({
      AboutStack: {
        screen: About,
        navigationOptions:{
          title:'About',
        }
      }
    })
  },
},{
  contentComponent: props => (<Drawer navigation={props.navigation} drawerProps={{...props}} />),
});

export const AppNavigatorStack = StackNavigator({
  PreAuthStack:{screen: PreAuthStack, navigationOptions:{
    title: 'Pre-Auth'
  }},
  MainStack: {screen: MainNavigator}
}, {
  headerMode:'none',
  initialRouteName: 'PreAuthStack'
})