import {createAction} from 'redux-actions';

import { DONE, FAIL, FETCH, MANGA, SEASON } from 'store/constants';

export const fetchManga = createAction(MANGA + FETCH);
export const fetchMangaSuccess = createAction(MANGA + FETCH + DONE);
export const fetchMangaFail = createAction(MANGA + FETCH + FAIL);