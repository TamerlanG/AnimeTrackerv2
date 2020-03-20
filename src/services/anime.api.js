import axios from 'utils/axios.config.js';

export function fetchAnime_API({id, request = '/'}) {
    return axios.get(`/anime/${id}/${request}`)
    .then(data => data.data);
}