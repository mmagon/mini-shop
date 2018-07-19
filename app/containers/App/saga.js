import { all, takeLatest, call, put } from 'redux-saga/effects';

import AuthSvc from 'services/auth';

import { currentUserSuccess, currentUserError } from './actions';
import { CURRENT_USER, CURRENT_USER_END } from './constants';

export function* currentUser({ token }) {
  try {
    const API = new AuthSvc(token);
    const xhr = yield call(API.loadUserData);
    if (xhr.status > 299) {
      throw xhr;
    }

    yield put(currentUserSuccess(xhr));
  } catch (e) {
    yield put(currentUserError(e));
  } finally {
    yield put({ type: CURRENT_USER_END });
  }
}

export default function*() {
  yield all([takeLatest(CURRENT_USER, currentUser)]);
}
