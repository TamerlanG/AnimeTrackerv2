import { handleActions } from 'redux-actions';

import { FETCH, DONE, FAIL, CURRENT_SEASON} from 'store/constants';

export const initialState = {
    current_season: {
        loading: false,
        success: false,
        failed: false,
        data: null
    }
};

export default handleActions(
    {
      [CURRENT_SEASON + FETCH]: state => ({
        ...state,
        current_season: {
            ...state.current_season,
            loading: true
        }
      }),
      [CURRENT_SEASON + FETCH + DONE]: (state, { payload }) => ({
        ...state,
        current_season: {
            ...state.current_season,
            loading: false,
            success: true,
            data: payload
        }
      }),
      [CURRENT_SEASON + FETCH + FAIL]: (state, { payload }) => ({
        ...state,
        current_season: {
            ...state.current_season,
            loading: false,
            failed: true
        }
      }),
    },
    initialState
  );