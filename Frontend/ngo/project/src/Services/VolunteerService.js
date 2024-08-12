import axios from "axios";
import { ADD_VOLUNTEER_API_ROUTE, DELETE_VOLUNTEER_ROUTE, GET_VOLUNTEER_ROUTE, UPDATE_VOLUNTEER_ROUTE } from "../Constants/ApiConstants";

const getAuthToken = () => localStorage.getItem('authToken');

export function addVolunteer(volunteerData) {
    return axios.post(ADD_VOLUNTEER_API_ROUTE, volunteerData);
}

export function fetchVolunteer() {
    const token = getAuthToken();
    return axios.get(GET_VOLUNTEER_ROUTE, {
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

export function deleteVolunteer(ID) {
    const token = getAuthToken();
    return axios.delete(`${DELETE_VOLUNTEER_ROUTE}/${ID}`, {
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

export function updateVolunteer(ID, Volunteer) {
    const token = getAuthToken();
    return axios.put(`${UPDATE_VOLUNTEER_ROUTE}/${ID}`, Volunteer, {
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
