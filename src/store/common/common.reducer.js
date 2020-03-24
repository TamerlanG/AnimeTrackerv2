import { handleActions } from 'redux-actions';

import { THEME, TOGGLE } from 'store/constants';

export const initialState = {
    theme: 'dark',
};

export default handleActions(
    {
      [THEME + TOGGLE]: (state, { payload }) => ({
            ...state,
            theme: payload
      })
    },
    initialState
);