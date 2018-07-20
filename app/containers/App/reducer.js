/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  CLICK_MODAL,
  SET_TOKEN,
  SET_USER,
  CURRENT_USER,
  CURRENT_USER_SUCCESS,
  LOGOUT,
  NOTIFY,
  NOTIFY_CLEAR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  modal: {
    status: false,
    name: '',
  },
  error: false,
  token: false,
  notifications: '',
  user: {
    last_action: false,
    data: {},
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_MODAL:
      return state
        .setIn(['modal', 'status'], action.modal)
        .setIn(['modal', 'name'], action.name);
    case SET_TOKEN:
      return state.set('token', action.token);
    case CURRENT_USER:
      return state.set('loading', true);
    case CURRENT_USER_SUCCESS:
      return state.set('loading', false).setIn(['user', 'data'], action.data);
    case SET_USER:
      return state
        .set('token', action.data.doc.token)
        .setIn(['user', 'data'], action.data.doc);
    case LOGOUT:
      return state.setIn(['user', 'last_action'], LOGOUT);
    case NOTIFY:
      return state.set('notifications', action.data.message);
    case NOTIFY_CLEAR:
      return state.set('notifications', '');
    default:
      return state;
  }
}

export default appReducer;
