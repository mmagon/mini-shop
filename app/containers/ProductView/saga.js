import { all, takeLatest, call, put } from 'redux-saga/effects';

import ProductSvc from '../../services/products';

import { getProductSuccess, getProductError } from './actions';

import { GET_PRODUCT, GET_PRODUCT_END } from './constants';

export function* getProduct({ id }) {
  try {
    const API = new ProductSvc();
    const xhr = yield call(API.getProduct, id);
    if (xhr.status > 299) {
      throw xhr;
    }
    yield put(getProductSuccess(xhr));
  } catch (e) {
    yield put(getProductError(e));
  } finally {
    yield put({ type: GET_PRODUCT_END });
  }
}

export default function*() {
  yield all([takeLatest(GET_PRODUCT, getProduct)]);
}
