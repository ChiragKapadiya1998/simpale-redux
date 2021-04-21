import {all} from 'redux-saga/effects';
import {waitForFetchAdd, waitForFetchRemove} from '../../sagas/AddSagas';

export default function* rootSaga() {
  yield all([waitForFetchAdd(), waitForFetchRemove()]);
}
