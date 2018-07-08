import {
  EMAIL_CHANGED,
  PWD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from "../actions/types";

const INITIAL_STATE = {
  email: '',
  pwd: '',
  loading: false,
  error: '',
  user: null
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PWD_CHANGED:
      return { ...state, pwd: action.payload }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, pwd: '', loading: false, }
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' }
    default:
      return state
  }
}