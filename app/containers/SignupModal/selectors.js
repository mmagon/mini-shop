import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signupModal state domain
 */

const selectSignupModalDomain = state => state.get('signupModal', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignupModal
 */

const makeSelectSignupModal = () =>
  createSelector(selectSignupModalDomain, substate => substate.toJS());

export default makeSelectSignupModal;
export { selectSignupModalDomain };
