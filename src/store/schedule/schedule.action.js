import {createAction} from 'redux-actions';

import { DONE, FAIL, FETCH, SCHEDULE, TODAY} from 'store/constants';

export const fetchTodaySchedule = createAction(SCHEDULE + TODAY + FETCH);
export const fetchTodayScheduleSuccess = createAction(SCHEDULE + TODAY + FETCH + DONE);
export const fetchTodayScheduleFail = createAction(SCHEDULE + TODAY + FETCH + FAIL);

