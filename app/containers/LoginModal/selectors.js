import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginModal state domain
 */

const selectLoginModalDomain = state => state.get('loginModal', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginModal
 */

const makeSelectLoginModal = () =>
  createSelector(selectLoginModalDomain, substate => substate.toJS());

export default makeSelectLoginModal;
export { selectLoginModalDomain };
