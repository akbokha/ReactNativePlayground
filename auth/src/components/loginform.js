import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Section, SectionHolder, Button } from "./common";

class LoginForm extends Component {
    render() {
        return (
            <SectionHolder>
                <Section>
                    <TextInput style={{ height: 20, width: 100 }}/>
                </Section>
                <Section>
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