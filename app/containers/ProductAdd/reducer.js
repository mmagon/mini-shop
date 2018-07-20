/*
 *
 * ProductAdd reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_NAME, CHANGE_PRICE, CHANGE_IMAGE } from './constants';

export const initialState = fromJS({
  loading: '',
  data: {
    name: '',
    price: '',
    image: {
      preview: '',
    },
  },
});

function productAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_IMAGE:
      return state.setIn(['data', 'image'], action.info);
    case CHANGE_NAME:
      return state.setIn(['data', 'name'], action.name);
    case CHANGE_PRICE:
      return state.setIn(['data', 'price'], action.price);
    default:
      return state;
  }
}

export default productAddReducer;
