import React, { Component } from 'react'
import {
  Text
} from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Input, Button } from "./common"
import { connect } from 'react-redux'
import { emailChanged, pwdChanged, loginUser } from "../actions";

class LoginForm extends Component {

  constructor() {
    super()
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPwdChange = this.onPwdChange.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)

  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPwdChange(text) {
    this.props.pwdChanged(text)
  }

  onButtonPress() {
    const { email, pwd } = this.props
    this.props.loginUser({ email, pwd })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@address.com"
            onChangeText={text => {
              this.onEmailChange(text)
            }}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={text => {
              this.onPwdChange(text)
            }}
            value={this.props.pwd}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onButtonPress}
          >
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    pwd: state.auth.pwd
  }
}

export default connect(mapStateToProps, { emailChanged, pwdChanged, loginUser })(LoginForm)