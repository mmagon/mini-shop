/*
 *
 * SignupModal actions
 *
 */

import {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

export function changeFirstName(first_name) {
  return {
    type: CHANGE_FIRST_NAME,
    first_name,
  };
}

export function changeLastName(last_name) {
  return {
    type: CHANGE_LAST_NAME,
    last_name,
  };
}

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

export function signup(data, modal) {
  return {
    type: SIGNUP,
    data,
    modal,
  };
}

export function signupSuccess(data) {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
}

export function signupError(data) {
  return {
    type: SIGNUP_ERROR,
    data,
  };
}
