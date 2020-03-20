import { call, put, takeLatest } from 'redux-saga/effects';

import { ANIME, DONE, FAIL, FETCH, SEASON } from 'store/constants';

import { fetchAnimeSuccess, fetchAnimeFail } from './anime.action';

import { fetchAnime_API } from 'services/anime.api.js';

function* fetchAnimeFlow({payload}){
    try {
        const response = yield call(fetchAnime_API, payload);
        if(response){
          yield put(fetchAnimeSuccess(response));
        }
      } catch (e) {
          yield put(fetchAnimeFail());
      }
}

export default function* animeSaga() {
    yield takeLatest(ANIME + FETCH, fetchAnimeFlow);
 }
