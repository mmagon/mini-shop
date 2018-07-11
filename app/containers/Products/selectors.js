import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the products state domain
 */

const selectProductsDomain = state => state.get('products', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Products
 */

const makeSelectProducts = () =>
  createSelector(selectProductsDomain, substate => substate.toJS());

export default makeSelectProducts;
export { selectProductsDomain };
