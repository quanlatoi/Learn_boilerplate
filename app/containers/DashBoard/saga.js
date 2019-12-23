import { all, fork, takeEvery, call, put } from 'redux-saga/effects';

import { callAPI } from 'utils/db';
import { STATUS_CODE, GET_LIST, GET_SUCCESS, GET_FAILED } from './constants';
import { getListTaskSuccess, getListTaskFalse } from './actions';

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

// Individual exports for testing
export default function* ySaga() {
  yield all([yield fork(watchFetchListTaskRequest)]);
  // See example in containers/HomePage/saga.js
}
