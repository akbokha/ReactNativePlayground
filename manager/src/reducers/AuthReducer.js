import {
  EMAIL_CHANGED,
  PWD_CHANGED
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
      return { ...state, email: action.payload };
    case PWD_CHANGED:
      return { ...state, pwd: action.payload };
    default:
      return state
  }
}