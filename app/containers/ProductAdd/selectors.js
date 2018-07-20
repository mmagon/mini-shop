import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productAdd state domain
 */

const selectProductAddDomain = state => state.get('productAdd', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProductAdd
 */

const makeSelectProductAdd = () =>
  createSelector(selectProductAddDomain, substate => substate.toJS());

export default makeSelectProductAdd;
export { selectProductAddDomain };
