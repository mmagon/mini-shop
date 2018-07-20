/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 */

import {
  CLICK_MODAL,
  SET_TOKEN,
  SET_USER,
  CURRENT_USER,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  NOTIFY,
  NOTIFY_CLEAR,
} from './constants';

export function clickModal(modal, name) {
  return {
    type: CLICK_MODAL,
    modal,
    name,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function setUser(data) {
  return {
    type: SET_USER,
    data,
  };
}

export function currentUser(token) {
  return {
    type: CURRENT_USER,
    token,
  };
}

export function currentUserSuccess(data) {
  return {
    type: CURRENT_USER_SUCCESS,
    data,
  };
}

export function currentUserError(data) {
  return {
    type: CURRENT_USER_ERROR,
    data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccess(data) {
  return {
    type: LOGOUT_SUCCESS,
    data,
  };
}

export function logoutError(data) {
  return {
    type: LOGOUT_ERROR,
    data,
  };
}

export function notify(data) {
  return {
    type: NOTIFY,
    data,
  };
}

export function notifyClear() {
  return {
    type: NOTIFY_CLEAR,
  };
}
