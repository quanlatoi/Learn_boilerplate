/*
 *
 * Y actions
 *
 */

import { DEFAULT_ACTION, GET_LIST, GET_SUCCESS, GET_FAILED } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const getListTask = () => ({
  type: GET_LIST,
});

export const getListTaskSuccess = data => ({
  type: GET_SUCCESS,
  payload: data,
});

export const getListTaskFalse = error => ({
  type: GET_FAILED,
  error,
});
