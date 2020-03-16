import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH, DONE, FAIL, CURRENT_SEASON} from 'store/constants';
 
import {
        fetchCurrentSeasonSuccess, 
        fetchCurrentSeasonFail
} from './season.action';

import { fetchCurrentSeason_API } from 'services/season.api.js';

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


export default function* seasonSaga() {
   yield takeLatest(CURRENT_SEASON + FETCH, fetchCurrentSeasonFlow);
}