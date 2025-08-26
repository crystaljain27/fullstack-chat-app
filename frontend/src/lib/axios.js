// In frontend/src/lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // Ensure this line is correct
});
