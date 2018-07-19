import { all, takeLatest, call, put } from 'redux-saga/effects';

import { clickModal, notify } from 'containers/App/actions';

import AuthSvc from 'services/auth';

import { signupSuccess, signupError } from './actions';
import { SIGNUP, SIGNUP_END } from './constants';

export function* signup({ data, modal }) {
  try {
    const API = new AuthSvc();
    const xhr = yield call(API.signup, data);
    if (xhr.status > 299) {
      throw xhr;
    }

    yield put(signupSuccess(xhr));
    yield put(notify(xhr));
    yield put(clickModal(modal));
  } catch (e) {
    yield put(signupError(e));
  } finally {
    yield put({ type: SIGNUP_END });
  }
}

export default function*() {
  yield all([takeLatest(SIGNUP, signup)]);
}
