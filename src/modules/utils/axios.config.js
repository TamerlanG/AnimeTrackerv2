import axios from 'axios';
import config from 'config';

const axiosRequestConfig = axios.create({
    baseURL: config.API_URL
});

export default axiosRequestConfig;