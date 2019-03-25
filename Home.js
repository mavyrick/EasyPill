import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>EasyPill</Text>
        <Button primary onPress={() => navigate('SignUp', {name: 'Jane'})}><Text> Sign Up </Text></Button>
        <Button info onPress={() => navigate('SignIn', {name: 'Jane'})}><Text> Sign In </Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  }
});
