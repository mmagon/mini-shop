/*
 *
 * ProductView actions
 *
 */

import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from './constants';

export function getProduct(id) {
  return {
    type: GET_PRODUCT,
    id,
  };
}
export function getProductSuccess(data) {
  return {
    type: GET_PRODUCT_SUCCESS,
    data,
  };
}
export function getProductError(data) {
  return {
    type: GET_PRODUCT_ERROR,
    data,
  };
}
