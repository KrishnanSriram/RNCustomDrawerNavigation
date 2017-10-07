import { AppRegistry } from 'react-native';
import App, {AppNavigatorStack, PreAuthStack} from './App';
import {MainNavigator} from "./App";


AppRegistry.registerComponent('CustomDrawerNavigation', () => AppNavigatorStack);
