/*
 *
 * Y actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_LIST,
  GET_SUCCESS,
  GET_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
} from './constants';

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

export const editTaskRequest = task => ({
  type: DELETE_TASK,
  payload: task,
});

export const deletetTaskRequestSuccess = data => ({
  type: DELETE_TASK_SUCCESS,
  payload: data,
});

export const deletetTaskRequestFailed = error => ({
  type: DELETE_TASK_FAILED,
  error,
});
