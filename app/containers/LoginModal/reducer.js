/*
 *
 * LoginModal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: null,
  data: {
    email: null,
    password: null,
  },
});

function loginModalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.setIn(['data', 'email'], action.email).set('error', null);
    case CHANGE_PASSWORD:
      return state
        .setIn(['data', 'password'], action.password)
        .set('error', null);
    case LOGIN:
      return state.set('loading', true);
    case LOGIN_SUCCESS:
      return state.set('loading', false);
    case LOGIN_ERROR:
      return state.set('loading', false).set('error', action.data.message);
    default:
      return state;
  }
}

export default loginModalReducer;
