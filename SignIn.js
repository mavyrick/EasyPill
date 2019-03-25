import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class SignIn extends Component {

  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }

  render() {
    return (
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
          </Form>
          <Button title="Login" onPress={this.handleLogin} />
        </Content>
      </Container>
    );
  }
}