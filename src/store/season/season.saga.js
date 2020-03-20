import { call, put, takeLatest } from 'redux-saga/effects';

import { CURRENT_SEASON, DONE, FAIL, FETCH, SEASON } from 'store/constants';
 
import {
        fetchSeasonSuccess,
        fetchSeasonFail,
        fetchCurrentSeasonSuccess, 
        fetchCurrentSeasonFail
} from './season.action';

import { fetchCurrentSeason_API, fetchSeason_API } from 'services/season.api.js';

function* fetchCurrentSeasonFlow() {
    try {
      const response = yield call(fetchCurrentSeason_API);
      if(response){
        yield put(fetchCurrentSeasonSuccess(response));
      }
    } catch (e) {
        yield put(fetchCurrentSeasonFail());
    }
}

function* fetchSeasonFlow({payload}) {
  try {
    const response = yield call(fetchSeason_API, payload);
    if(response){
      yield put(fetchSeasonSuccess(response));
    }
  } catch (e) {
      yield put(fetchSeasonFail());
  }
}

export default function* seasonSaga() {
   yield takeLatest(CURRENT_SEASON + FETCH, fetchCurrentSeasonFlow);
   yield takeLatest(SEASON + FETCH, fetchSeasonFlow);
}