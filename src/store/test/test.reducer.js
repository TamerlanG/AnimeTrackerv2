import {handleActions} from 'redux-actions';

import {TEST} from 'store/constants';

export const initalState = {
  test: null,
};

export default handleActions(
  {
    [TEST]: () => ({
      test: 'its working!!!',
    }),
  },
  initalState,
);
