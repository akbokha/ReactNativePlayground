// import library to help create a Component
import React from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);

// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);
