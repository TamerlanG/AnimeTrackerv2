import {createAction} from 'redux-actions';

import { FETCH, DONE, FAIL, CURRENT_SEASON} from 'store/constants';

export const fetchCurrentSeason = createAction(CURRENT_SEASON + FETCH);
export const fetchCurrentSeasonSuccess = createAction(CURRENT_SEASON + FETCH + DONE);
export const fetchCurrentSeasonFail = createAction(CURRENT_SEASON + FETCH + FAIL);