import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, DatePicker, Text, Button } from 'native-base';
import { AppRegistry, ScrollView, Image } from 'react-native';

export default class SignUp extends Component {

state = { email: '', password: '', errorMessage: null }

handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
}

  render() {
    return (
      <ScrollView>
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Social Security Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Insurance Number</Label>
              <Input />
            </Item>
            <Content>
               <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Date of Birth"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </Content>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Street Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Street Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Zip Code</Label>
              <Input />
            </Item>
          </Form>
          <Button primary onPress={() => navigate('ProfileScreen', {name: 'Jane'})}><Text> Sign Up </Text></Button>
        </Content>
      </Container>
      </ScrollView>
    );
  }
}