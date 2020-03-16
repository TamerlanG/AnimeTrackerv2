import {handleActions} from 'redux-actions';

import { DONE, FAIL, FETCH, SCHEDULE, TODAY} from 'store/constants';

export const initialState = {
    today: {
        loading: false,
        success: false,
        failed: false,
        data: null
    }
};

export default handleActions(
    {
      [SCHEDULE + TODAY + FETCH]: state => ({
        ...state,
        today: {
            ...state.today,
            loading: true
        }
      }),
      [SCHEDULE + TODAY + FETCH + DONE]: (state, { payload }) => ({
        ...state,
        today: {
            ...state.today,
            loading: false,
            success: true,
            data: payload
        }
      }),
      [SCHEDULE + TODAY + FETCH + FAIL]: (state, { payload }) => ({
        ...state,
        today: {
            ...state.today,
            loading: false,
            failed: true
        }
      }),
    },
    initialState
  );