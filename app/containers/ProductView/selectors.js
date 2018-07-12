import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productView state domain
 */

const selectProductViewDomain = state => state.get('productView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductView
 */

const makeSelectProductView = () =>
  createSelector(selectProductViewDomain, substate => substate.toJS());

export default makeSelectProductView;
export { selectProductViewDomain };
