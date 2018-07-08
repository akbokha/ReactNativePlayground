import firebase from 'firebase'

import {
  EMAIL_CHANGED,
  PWD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
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
    dispatch({ type: LOGIN_USER_START })
    firebase.auth().signInWithEmailAndPassword(email, pwd)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(e => loginUserFailed(dispatch, e.message))
      })
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch(
    {
      type: LOGIN_USER_SUCCESS,
      payload: user
    }
  )
}

const loginUserFailed = (dispatch, errorMessage) => {
  dispatch(
    {
      type: LOGIN_USER_FAIL,
      payload: errorMessage
    }
  )
}
