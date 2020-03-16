/**
 * This class is just general helper function.
 */

import dayjs from 'dayjs'


/** VARIABLES */
const seasons = {
    SUMMER: 'summer',
    WINTER: 'winter',
    SPRING: 'spring',
    FALL: 'fall'
}

const days = {
    MONDAY: "monday",
    TUESDAY: "tuesday",
    WEDNESDAY: "wednesday",
    THURSDAY: "thursday",
    FRIDAY: "friday",
    SATURDAY: "saturday",
    SUNDAY: "sunday"
}

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
    let currentSeason;

    if(current_month >= 0 && current_month <= 2){
        currentSeason = seasons.WINTER; 
    }

    if(current_month >= 3 && current_month <= 5){
        currentSeason=seasons.SPRING;
    }

    if(current_month >= 6 && current_month <= 8){
        currentSeason=seasons.SUMMER;
    }

    if(current_month >= 9 && current_month <= 11){
        currentSeason=seasons.FALL;
    }

    return currentSeason;
}
/**
 * Void -> String
 * returns the current day which can either be: 
 * - monday
 * - tuesday
 * - wednesday
 * - thursday
 * - friday
 * - saturday
 * - sunday
 */
export function getCurrentDay(){
    currentDate = new Date();

    const day = days.keys(days)[currentDate.getDay()];
}