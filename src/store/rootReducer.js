import {combineReducers} from 'redux';

/* Reducers */
import season from 'store/season/season.reducer.js';
import schedule from 'store/schedule/schedule.reducer.js';

export default combineReducers({
    season
});
