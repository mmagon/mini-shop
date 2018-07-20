/*
 *
 * ProductAdd actions
 *
 */

import { CHANGE_NAME, CHANGE_PRICE, CHANGE_IMAGE } from './constants';

export function changeImage(file, info) {
  return {
    type: CHANGE_IMAGE,
    file,
    info,
  };
}

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}

export function changePrice(price) {
  return {
    type: CHANGE_PRICE,
    price,
  };
}
