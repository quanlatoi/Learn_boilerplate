/* eslint-disable consistent-return */
/*
 *
 * Y reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_SUCCESS,
  GET_FAILED,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
} from './constants';

export const initialState = {
  data: [],
};

/* eslint-disable default-case, no-param-reassign */
const yReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_SUCCESS:
        return {
          data: [...action.payload],
        };
      case GET_FAILED:
        return {
          data: [...action.error],
        };
      case DELETE_TASK_SUCCESS: {
        const listTask = [...state.data];
        const a = listTask.findIndex(elem => elem.id === action.payload);
        listTask.splice(a, 1);
        return {
          data: listTask,
        };
      }
    }
  });

export default yReducer;
