import { call, put, takeLatest } from 'redux-saga/effects';

import { DONE, FAIL, FETCH, MANGA, SEARCH } from 'store/constants';

import { fetchSearchSuccess, fetchSearchFail } from './search.action';

import { fetchSearch_API } from 'services/search.api.js';

function* fetchSearchFlow({payload}){
    try {
        const response = yield call(fetchSearch_API, payload);
        if(response){
          yield put(fetchSearchSuccess(response));
        }
      } catch (e) {
          yield put(fetchSearchFail());
      }
}

export default function* searchSaga() {
    yield takeLatest(SEARCH + FETCH, fetchSearchFlow);
}
