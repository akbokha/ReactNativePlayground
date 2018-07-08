import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import { Card, CardSection, Input, Button, Spinner } from "./common"
import { connect } from 'react-redux'
import { emailChanged, pwdChanged, loginUser } from "../actions";

class LoginForm extends Component {

  constructor() {
    super()
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPwdChange = this.onPwdChange.bind(this)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.renderError = this.renderError.bind(this)
    this.renderButton = this.renderButton.bind(this)
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

  renderButton() {
    if (this.props.loading) {
      return (<Spinner size="large"/>)
    } else {
      return (
        <Button onPress={this.onButtonPress}>
          Login
        </Button>)
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
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
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    pwd: state.auth.pwd,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, { emailChanged, pwdChanged, loginUser })(LoginForm)