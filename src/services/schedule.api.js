import axios from 'utils/axios.config.js';

/** DEV */
import { getCurrentDay } from 'utils/helper';

export function fetchTodaySchedule_API(){
    const current_day = getCurrentDay();
    return axios.get(`/schedule/${current_day}`)
    .then(data => data.data[current_day]);
}