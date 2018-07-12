import { all, takeLatest, call, put } from 'redux-saga/effects';

import ProductSvc from '../../services/products';

import { getProductListSuccess, getProductListError } from './actions';

import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_END } from './constants';

export function* getProductList() {
  try {
    const API = new ProductSvc();
    const xhr = yield call(API.products);
    if (xhr.status > 299) {
      throw xhr;
    }

    yield put(getProductListSuccess(xhr));
  } catch (e) {
    yield put(getProductListError(e));
  } finally {
    yield put({ type: GET_PRODUCT_LIST_END });
  }
}

export default function*() {
  yield all([takeLatest(GET_PRODUCT_LIST, getProductList)]);
}
