import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Or your actual backend URL
  withCredentials: true,
});

export default instance;
