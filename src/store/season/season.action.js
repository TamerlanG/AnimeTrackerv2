import {createAction} from 'redux-actions';

import { CURRENT_SEASON, DONE, FAIL, FETCH, SEASON } from 'store/constants';

export const fetchCurrentSeason = createAction(CURRENT_SEASON + FETCH);
export const fetchCurrentSeasonSuccess = createAction(CURRENT_SEASON + FETCH + DONE);
export const fetchCurrentSeasonFail = createAction(CURRENT_SEASON + FETCH + FAIL);

export const fetchSeason = createAction(SEASON + FETCH);
export const fetchSeasonSuccess = createAction(SEASON + FETCH + DONE);
export const fetchSeasonFail = createAction(SEASON + FETCH + FAIL);


