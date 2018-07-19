/*
 *
 * SignupModal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: null,
  message: false,
  data: {
    first_name: null,
    last_name: null,
    email: null,
    password: null,
  },
});

function signupModalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FIRST_NAME:
      return state
        .setIn(['data', 'first_name'], action.first_name)
        .set('error', null);
    case CHANGE_LAST_NAME:
      return state
        .setIn(['data', 'last_name'], action.last_name)
        .set('error', null);
    case CHANGE_EMAIL:
      return state.setIn(['data', 'email'], action.email).set('error', null);
    case CHANGE_PASSWORD:
      return state
        .setIn(['data', 'password'], action.password)
        .set('error', null);
    case SIGNUP:
      return state.set('loading', true);
    case SIGNUP_SUCCESS:
      return state.set('loading', false).set('message', action.data.message);
    case SIGNUP_ERROR:
      return state.set('loading', false).set('error', action.data.message);
    default:
      return state;
  }
}

export default signupModalReducer;
