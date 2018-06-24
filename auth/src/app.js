import React, { Component } from 'react';
import {
    View
} from 'react-native';
import LoginForm from './components/loginform';
import { Header } from "./components/common";
import firebase_config from "./components/config";

class App extends Component {
    initializeFirebase() {
        const firebase = require("firebase");
        firebase.initializeApp(firebase_config);
    }

    componentWillMount() {
        this.initializeFirebase();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={"Simple Authorization"}/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;