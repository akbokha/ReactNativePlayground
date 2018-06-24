import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import firebase from 'firebase';
import {Header, Section, SectionHolder} from "./components/common";

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDc1HimSpf_TUK7zv3MNsXcdhmRl0RqV-Y',
            authDomain: 'auth-e4671.firebaseapp.com',
            databaseURL: 'https://auth-e4671.firebaseio.com',
            projectId: 'auth-e4671',
            storageBucket: 'auth-e4671.appspot.com',
            messagingSenderId: '851417185571'
        });
    }

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