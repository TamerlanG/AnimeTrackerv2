import { call, put, takeLatest } from 'redux-saga/effects';

import { DONE, FAIL, FETCH, SCHEDULE, TODAY} from 'store/constants';

import {
    fetchTodayScheduleSuccess,
    fetchTodayScheduleFail
} from './schedule.action';

import {
    fetchTodaySchedule_API
} from 'services/schedule.api.js';

function* fetchTodayScheduleFlow() {
    try {
      const response = yield call(fetchTodaySchedule_API);
      if(response){
        yield put(fetchTodayScheduleSuccess(response));
      }
    } catch (e) {
        yield put(fetchTodayScheduleFail());
    }
}


export default function* scheduleSaga() {
    yield takeLatest(SCHEDULE + TODAY + FETCH, fetchTodayScheduleFlow);
 }