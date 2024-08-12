import axios from "axios";
import { DONATION_STATUS_ROUTE } from "../Constants/ApiConstants";

export const getDonationStatus = (name) => {
  
  const url = `${DONATION_STATUS_ROUTE}/${name}`;

  
  return axios.get(url);
};