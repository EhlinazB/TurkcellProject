import axios from "axios";
import { ECOMMERCE_API_URL } from "./api";


export const axiosInstance = axios.create({
    baseURL: ECOMMERCE_API_URL,
    timeout: 5000
})