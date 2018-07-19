/*
 *
 * LoginModal actions
 *
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function login(data, modal) {
  return {
    type: LOGIN,
    data,
    modal,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}

export function loginError(data) {
  return {
    type: LOGIN_ERROR,
    data,
  };
}
