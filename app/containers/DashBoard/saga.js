import { all, fork, takeEvery, call, put } from 'redux-saga/effects';

import { callAPI } from 'utils/db';
import { STATUS_CODE, GET_LIST, DELETE_TASK } from './constants';
import {
  getListTaskSuccess,
  getListTaskFalse,
  deletetTaskRequestSuccess,
  deletetTaskRequestFailed,
} from './actions';

function fetchListTask() {
  return callAPI('itemtodos', 'GET');
}

function* fetchListTaskRequest() {
  const res = yield call(fetchListTask);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(getListTaskSuccess(data));
  } else {
    yield put(getListTaskFalse(data));
  }
}

function* watchFetchListTaskRequest() {
  yield takeEvery(GET_LIST, fetchListTaskRequest);
}

function fetchdeletetTask(task) {
  return callAPI(`itemtodos/${task}`, 'DELETE');
}

function* deletetTaskRequest({ payload }) {
  const res = yield call(fetchdeletetTask, payload);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(deletetTaskRequestSuccess(data));
  } else {
    yield put(deletetTaskRequestFailed(data));
  }
}

function* watchdeletetTaskRequest() {
  yield takeEvery(DELETE_TASK, deletetTaskRequest);
}
// Individual exports for testing
export default function* ySaga() {
  yield all([
    yield fork(watchFetchListTaskRequest),
    yield fork(watchdeletetTaskRequest),
  ]);
  // See example in containers/HomePage/saga.js
}
