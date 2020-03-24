import {createAction} from 'redux-actions';

import { THEME, TOGGLE } from 'store/constants';

export const toggleTheme = createAction(THEME + TOGGLE);