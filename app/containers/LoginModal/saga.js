import { all, takeLatest, call, put } from 'redux-saga/effects';

import { clickModal, setUser, notify } from 'containers/App/actions';

import AuthSvc from 'services/auth';

import { loginSuccess, loginError } from './actions';
import { LOGIN, LOGIN_END } from './constants';

export function* login({ data, modal }) {
  try {
    const API = new AuthSvc();
    const xhr = yield call(API.login, data);
    if (xhr.status > 299) {
      throw xhr;
    }
    yield put(loginSuccess(xhr));
    yield put(notify(xhr));
    yield put(setUser(xhr));
    yield put(clickModal(modal));
  } catch (e) {
    yield put(loginError(e));
  } finally {
    yield put({ type: LOGIN_END });
  }
}

export default function*() {
  yield all([takeLatest(LOGIN, login)]);
}
