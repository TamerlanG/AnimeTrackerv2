import axios from 'utils/axios.config.js';

/**
 * Fetches a single manga object with all its details
 * @param ID manga ID
 * @param Request type of request, ex. characters, news, pictures, etc...
 * @return manga_object
 * */
export function fetchManga_API({id, request}) {
    return axios.get(`/manga/${id}/${request}`)
    .then(data => data.data);
}