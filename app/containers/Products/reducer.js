/*
 *
 * Products reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  products_list: [],
});

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return state.set('loading', true);
    case GET_PRODUCT_LIST_SUCCESS:
      return state
        .set('loading', false)
        .set('products_list', fromJS(action.data.docs));
    case GET_PRODUCT_LIST_ERROR:
      return state;
    default:
      return state;
  }
}

export default productsReducer;
