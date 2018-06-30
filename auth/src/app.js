import React, { Component } from 'react';
import {
    View
} from 'react-native';
import LoginForm from './components/loginform';
import { Header, Button, Spinner } from "./components/common";
import firebase from 'firebase';
import firebase_config from "./components/config";

class App extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: null
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    static initializeFirebase() {
        // const firebase = require("firebase"); // was needed as workaround for firebase-js-sdk/issues/871
        firebase.initializeApp(firebase_config);
    }

    componentWillMount() {
        App.initializeFirebase();

        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
        });
    }

    onButtonPress() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPressMethod={this.onButtonPress}>
                        Log Out
                    </Button>
                );
            case false:
                return (
                    <LoginForm/>
                );
            default:
                <Spinner/> // large is default
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={"Simple Authentication"}/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;