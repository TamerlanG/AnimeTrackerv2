import {all} from 'redux-saga/effects';
import seasonSaga from 'store/season/season.saga.js';

export default function* root() {
  yield all([
    seasonSaga(),
  ]);
}
