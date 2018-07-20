/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

import app_config from 'config/app.json';

export const CLICK_MODAL = `${app_config.app_name}/App/CLICK_MODAL`;
export const SET_TOKEN = `${app_config.app_name}/App/SET_TOKEN`;
export const SET_USER = `${app_config.app_name}/App/SET_USER`;

export const LOGOUT = `${app_config.app_name}/App/LOGOUT`;
export const LOGOUT_SUCCESS = `${app_config.app_name}/App/LOGOUT_SUCCESS`;
export const LOGOUT_ERROR = `${app_config.app_name}/App/LOGOUT_ERROR`;
export const LOGOUT_END = `${app_config.app_name}/App/LOGOUT_END`;

export const CURRENT_USER = `${app_config.app_name}/App/CURRENT_USER`;
export const CURRENT_USER_SUCCESS = `${
  app_config.app_name
}/App/CURRENT_USER_SUCCESS`;
export const CURRENT_USER_ERROR = `${
  app_config.app_name
}/App/CURRENT_USER_ERROR`;
export const CURRENT_USER_END = `${app_config.app_name}/App/CURRENT_USER_END`;

export const NOTIFY = `${app_config.app_name}/App/NOTIFY`;
export const NOTIFY_CLEAR = `${app_config.app_name}/App/NOTIFY_CLEAR`;
