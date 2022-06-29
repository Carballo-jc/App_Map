import axios from 'axios';
import { token } from '../utils/const';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token:`${token}`
    }
})

export default searchApi;