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
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>
        } else {
            return (
                <Button onPressMethod={this.onButtonPress}>
                    Log in
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
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, pwd)
                    .catch(e => {
                        this.setState({ error: e.message });
                    });
            });
    };

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