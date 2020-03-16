/**
 * This class is just general helper function.
 */

import dayjs from 'dayjs'

 /**
  * Void -> Season
  * returns the current anime season which can either be: 
  * - winter
  * - spring
  * - summer
  * - fall
  */
export function getCurrentSeason() {
    // Months start from 0 to 11 (Jan to Dec)
    const current_month = dayjs().month();
    let season;

    if(current_month >= 0 && current_month <= 2){
        season = "winter" 
    }

    if(current_month >= 3 && current_month <= 5){
        season="spring"
    }

    if(current_month >= 6 && current_month <= 8){
        season="summer"
    }

    if(current_month >= 9 && current_month <= 11){
        season="fall"
    }

    return season;
}