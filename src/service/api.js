import axios from 'axios';

const API_URL = 'https://api-upala.onrender.com';

export default {
    getPlaces() {
        return axios.get(`${API_URL}/api/home`);
    }
};