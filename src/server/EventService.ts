import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Justynasd/univers",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
