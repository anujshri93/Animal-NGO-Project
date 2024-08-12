import axios from "axios";
import { ADMIN_LOGIN_URL, ADMIN_SIGN_UP_ROUTE } from "../Constants/ApiConstants";
import { ADMIN_TOKEN_STORAGE_KEY } from "../Constants/AuthConstants";


export function adminSignup(AdminData){

    return axios.post(ADMIN_SIGN_UP_ROUTE,AdminData);
    
}


export function adminlogin(loginCredentials){

    return axios.post(ADMIN_LOGIN_URL,loginCredentials);


}

export function storeToken(token){

    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token);

}

export function logout() {
    // Clear user authentication state
    localStorage.removeItem('authToken'); // Remove the authentication token
    localStorage.removeItem('isLoggedIn'); // Remove the authentication status
}

export function getToken(){

    localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)

}

