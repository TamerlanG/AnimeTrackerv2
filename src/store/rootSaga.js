import {all} from 'redux-saga/effects';

/** Sagas */
import scheduleSaga from 'store/schedule/schedule.saga.js';
import seasonSaga from 'store/season/season.saga.js';


export default function* root() {
  yield all([
    scheduleSaga(),
    seasonSaga(),
  ]);
}
