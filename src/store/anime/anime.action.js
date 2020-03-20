import {createAction} from 'redux-actions';

import { ANIME, DONE, FAIL, FETCH, SEASON } from 'store/constants';

export const fetchAnime = createAction(ANIME + FETCH);
export const fetchAnimeSuccess = createAction(ANIME + FETCH + DONE);
export const fetchAnimeFail = createAction(ANIME + FETCH + FAIL);