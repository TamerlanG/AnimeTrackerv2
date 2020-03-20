import {all} from 'redux-saga/effects';

/** Sagas */
import animeSaga from 'store/anime/anime.saga.js';
import mangaSaga from 'store/manga/manga.saga.js';
import scheduleSaga from 'store/schedule/schedule.saga.js';
import seasonSaga from 'store/season/season.saga.js';


export default function* root() {
  yield all([
    animeSaga(),
    mangaSaga(),
    scheduleSaga(),
    seasonSaga(),
  ]);
}
