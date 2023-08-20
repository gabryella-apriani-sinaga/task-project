import axios from "axios";
import apiUrl from "../baseUrl";

const serviceUrl = "/pokemon";

export const servicePokemon = () => axios.get(`${apiUrl}${serviceUrl}`);
