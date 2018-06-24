import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Header, Section, SectionHolder} from "./components/common";

class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Simple Authorization"/>
                <SectionHolder>
                    <Section>
                        <Text>
                            Lorem Ipsum
                        </Text>
                    </Section>
                </SectionHolder>
            </View>
        );
    }
}

export default App;