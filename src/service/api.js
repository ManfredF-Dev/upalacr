import axios from 'axios';

const API_URL = 'http://localhost:1999';

export default {
    getPlaces() {
        return axios.get(`${API_URL}/api/home`);
    }
};