import React, { Component } from 'react';
import { Section, SectionHolder, Button, InputBox } from "./common";

class LoginForm extends Component {
    state = {
        email: '',
        pwd: ''
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
                <Section>
                    <Button>
                        Log in
                    </Button>
                </Section>
            </SectionHolder>

        );
    }
}

export default LoginForm;