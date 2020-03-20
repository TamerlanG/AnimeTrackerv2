import {combineReducers} from 'redux';

/* Reducers */
import anime from 'store/anime/anime.reducer.js';
import manga from 'store/manga/manga.reducer.js';
import season from 'store/season/season.reducer.js';
import schedule from 'store/schedule/schedule.reducer.js';

export default combineReducers({
    anime,
    manga,
    schedule,
    season
});
