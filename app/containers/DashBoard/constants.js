/*
 *
 * Tasks constants
 *
 */

export const DEFAULT_ACTION = 'app/Y/DEFAULT_ACTION';
// eslint-disable-next-line prettier/prettier
export const Status = [
  {
    value: 'col-1',
    label: 'Những việc cần làm',
  },
  {
    value: 'col-2',
    label: 'Những việc đang làm',
  },
  {
    value: 'col-3',
    label: 'Những việc hoàn thành',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
}

export const GET_LIST = 'GET_LIST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILED = 'GET_FAILED';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILED = 'DELETE_TASK_FAILED';