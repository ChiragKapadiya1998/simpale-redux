import {takeEvery, call, put} from 'redux-saga/effects';
import {addSaga, removeSaga} from '../redux/Action/action';
import {ADDTOSAGA, REMOVETOSAGA} from '../redux/Action/actionTypes';

function* fetchAdd() {
  try {
    yield put(addSaga(10));
  } catch (e) {}
}

export function* waitForFetchAdd() {
  yield takeEvery(ADDTOSAGA, fetchAdd);
}

function* fetchRemove() {
  try {
    yield put(removeSaga(10));
  } catch (e) {}
}

export function* waitForFetchRemove() {
  yield takeEvery(REMOVETOSAGA, fetchRemove);
}
