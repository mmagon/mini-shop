/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectSessionToken = () =>
  createSelector(selectGlobal, globalState => globalState.get('token'));

const makeSelectModal = () =>
  createSelector(selectGlobal, globalState => globalState.get('modal').toJS());

const makeSelectUserData = () =>
  createSelector(selectGlobal, globalState => globalState.get('user').toJS());

const makeSelectUserNotifications = () =>
  createSelector(selectGlobal, globalState => globalState.get('notifications'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectLastAction = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['user', 'last_action']),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectSessionToken,
  makeSelectUserNotifications,
  makeSelectModal,
  makeSelectUserData,
  makeSelectLoading,
  makeSelectError,
  makeSelectLastAction,
  makeSelectLocation,
};
