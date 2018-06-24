import React, {Component} from 'react';
import {
    View
} from 'react-native';
import LoginForm from './components/loginform';
import {Header} from "./components/common";

class App extends Component {
    initializeFirebase() {
        const firebase = require("firebase");

        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyDc1HimSpf_TUK7zv3MNsXcdhmRl0RqV-Y',
            authDomain: 'auth-e4671.firebaseapp.com',
            databaseURL: 'https://auth-e4671.firebaseio.com',
            projectId: 'auth-e4671',
            storageBucket: 'auth-e4671.appspot.com',
            messagingSenderId: '851417185571'
        };
        firebase.initializeApp(config);
    }

    componentWillMount() {
        this.initializeFirebase();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText={"Simple Authorization"}/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;