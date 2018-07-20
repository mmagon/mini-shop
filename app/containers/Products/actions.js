/*
 *
 * Products actions
 *
 */

import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from './constants';

export function getProductList() {
  return {
    type: GET_PRODUCT_LIST,
  };
}

export function getProductListSuccess(data) {
  return {
    type: GET_PRODUCT_LIST_SUCCESS,
    data,
  };
}

export function getProductListError(data) {
  return {
    type: GET_PRODUCT_LIST_ERROR,
    data,
  };
}
