import { handleActions } from 'redux-actions';

import { DONE, FAIL, FETCH, MANGA, SEARCH } from 'store/constants';

import { arrayToObjectAdapter } from 'utils/helper';

export const initialState = {
    loading: false,
    success: false,
    failed: false,
    data: null
};

export default handleActions(
    {
      [SEARCH + FETCH]: state => ({
            ...state,
            loading: true
      }),
      [SEARCH + FETCH + DONE]: (state, { payload }) => ({
        ...state,
        loading: false,
        success: true,
        data: arrayToObjectAdapter(payload)
      }),
      [SEARCH + FETCH + FAIL]: (state, { payload }) => ({
        ...state,
        loading: false,
        failed: true
      }),
    },
    initialState
);