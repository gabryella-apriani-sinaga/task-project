import axios from "axios";
import apiUrl from "../baseUrl";

const registerServiceUrl = "/register";
const loginServiceUrl = "/login";

export const registerServiceUser = (payload) =>
  axios.post(`${apiUrl}${registerServiceUrl}`, payload);

export const loginServiceUser = (payload) =>
  axios.post(`${apiUrl}${loginServiceUrl}`, payload);
