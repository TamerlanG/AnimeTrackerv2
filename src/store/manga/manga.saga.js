import { call, put, takeLatest } from 'redux-saga/effects';

import { DONE, FAIL, FETCH, MANGA, SEASON } from 'store/constants';

import { fetchMangaSuccess, fetchMangaFail } from './manga.action';

import { fetchManga_API } from 'services/manga.api.js';

function* fetchMangaFlow({payload}){
    try {
        const response = yield call(fetchManga_API, payload);
        if(response){
          yield put(fetchMangaSuccess(response));
        }
      } catch (e) {
          yield put(fetchMangaFail());
      }
}

export default function* mangaSaga() {
    yield takeLatest(MANGA + FETCH, fetchMangaFlow);
 }
