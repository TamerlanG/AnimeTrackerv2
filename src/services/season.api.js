
import axios from 'utils/axios.config.js';
import dayjs from 'dayjs'

/** DEV */
import { getCurrentSeason } from 'utils/helper';


export function fetchCurrentSeason_API() {
    const current_season = getCurrentSeason();
    const current_year = dayjs().year();
    return axios.get(`/season/${current_year}/${current_season}`)
    .then(data => data.data.anime);
}

export function fetchSeason_API({year, season}) {
    return axios.get(`/season/${year}/${season}`)
    .then(data => data.data.anime);
}