import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import Router from './Router'
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk'
import firebase_config from "./config"
import firebase from 'firebase'

class App extends Component {

  static initializeFirebase() {
    firebase.initializeApp(firebase_config)
  }

  componentWillMount() {
    App.initializeFirebase()
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App