import axios from "axios";
import { DONATION_API_ROUTE, FETCH_DONATIONS_ROUTE } from "../Constants/ApiConstants";

const getAuthToken = () => localStorage.getItem('authToken');

export function Donation(donateData) {
    return axios.post(DONATION_API_ROUTE, donateData);
}

export function fetchDonations() {
    const token = getAuthToken();
    return axios.get(FETCH_DONATIONS_ROUTE, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch(error => {
        if (error.response && error.response.status === 401) {
            throw new Error('Unauthorized');
        }
        throw error;
    });
}
