import {createAction} from 'redux-actions';

import { DONE, FAIL, FETCH, MANGA, SEARCH } from 'store/constants';

export const fetchSearch = createAction(SEARCH + FETCH);
export const fetchSearchSuccess = createAction(SEARCH + FETCH + DONE);
export const fetchSearchFail = createAction(SEARCH + FETCH + FAIL);