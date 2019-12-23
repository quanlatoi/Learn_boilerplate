/* eslint-disable consistent-return */
/*
 *
 * Y reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, GET_SUCCESS, GET_FAILED } from './constants';

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
    }
  });

export default yReducer;
