import axios from 'utils/axios.config.js';

/**
 * fetchSearch_API
 * Fetches stuff depending on props.
 * @param query search string
 * @param type can be one of: anime, manga, person, character
 * TODO: MAKE IT SO THAT WE CAN DO ADVANCED FILTER BY ...FILTER in params.
 * @return search_object
 * */
export function fetchSearch_API({query, type}) {
    return axios.get(`/search/${type}`, {
        params: {
            q: query,
            genre: 12,
            genre_exclude: 0
        }
    })
    .then(data => data.data.results);
}