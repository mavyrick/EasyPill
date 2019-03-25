import React from 'react';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import Loading from './Loading';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Loading: {screen: Loading},
  Home: {screen: Home},
  SignUp: {screen: SignUp},
  SignIn: {screen: SignIn},
  Profile: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

export default App;