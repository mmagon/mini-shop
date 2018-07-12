/*
 *
 * ProductView reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
} from './constants';

export const initialState = fromJS({
  loading: false,
  product: {},
  error: '',
});

function productViewReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return state.set('loading', true);
    case GET_PRODUCT_SUCCESS:
      return state.set('loading', false).set('product', fromJS(action.data));
    case GET_PRODUCT_ERROR:
      return state.set('loading', false).set('error', fromJS(action.data));
    default:
      return state;
  }
}

export default productViewReducer;
