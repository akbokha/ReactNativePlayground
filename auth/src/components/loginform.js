import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import firebase from 'firebase';
import { Section, SectionHolder, Button, InputBox, Spinner } from "./common";

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            pwd: '',
            error: '',
            loading: false
        };
        this.onButtonPress = this.onButtonPress.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this)
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>
        } else {
            return (
                <Button onPressMethod={this.onButtonPress}>
                    Log In
                </Button>
            );
        }
    }

    onButtonPress() {
        this.setState({
            error: '',
            loading: true
        });

        const { email, pwd } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, pwd)
                    .then(this.onLoginSuccess)
                    .catch(e => {
                        this.onLoginFail(e);
                    });
            });
    };

    onLoginSuccess() {
        this.setState({
            email: '',
            pwd: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail(e) {
        this.setState({ error: e.message, loading: false })
    }

    render() {
        return (
            <SectionHolder>
                <Section>
                    <InputBox
                        label={"E-mail"}
                        placeholder={"address@host.com"}
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </Section>
                <Section>
                    <InputBox
                        label={"Password"}
                        placeholder={""}
                        value={this.state.pwd}
                        onChangeText={text => this.setState({ pwd: text })}
                        secureTextEntry={true}
                    />
                </Section>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <Section>
                    {this.renderButton()}
                </Section>
            </SectionHolder>

        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }
};


export default LoginForm;