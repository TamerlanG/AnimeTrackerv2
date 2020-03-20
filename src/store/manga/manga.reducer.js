import { handleActions } from 'redux-actions';

import { DONE, FAIL, FETCH, MANGA, SEASON } from 'store/constants';

export const initialState = {
    loading: false,
    success: false,
    failed: false,
    data: null
};

export default handleActions(
    {
      [MANGA + FETCH]: state => ({
            ...state,
            loading: true
      }),
      [MANGA + FETCH + DONE]: (state, { payload }) => ({
        ...state,
        loading: false,
        success: true,
        data: payload
      }),
      [MANGA + FETCH + FAIL]: (state, { payload }) => ({
        ...state,
        loading: false,
        failed: true
      }),
    },
    initialState
  );