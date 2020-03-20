import { handleActions } from 'redux-actions';

import { ANIME, DONE, FAIL, FETCH, SEASON } from 'store/constants';

export const initialState = {
        loading: false,
        success: false,
        failed: false,
        data: null
};

export default handleActions(
    {
      [ANIME + FETCH]: state => ({
            ...state,
            loading: true
      }),
      [ANIME + FETCH + DONE]: (state, { payload }) => ({
        ...state,
        loading: false,
        success: true,
        data: payload
      }),
      [ANIME + FETCH + FAIL]: (state, { payload }) => ({
        ...state,
        loading: false,
        failed: true
      }),
    },
    initialState
  );