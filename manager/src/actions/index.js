import firebase from 'firebase'

import {
  EMAIL_CHANGED,
  PWD_CHANGED
} from "./types";

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const pwdChanged = (text) => {
  return {
    type: PWD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, pwd }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, pwd)
      .then(user => {
          dispatch(
            {
              type: 'LOGIN_USER_SUCCESS',
              payload: user
            }
          )
        }
      )
  }
}
