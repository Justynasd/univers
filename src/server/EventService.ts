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
  getEvents(perPage: string, page: string) {
    return apiClient.get("/events?_limit="+perPage+"&_page="+page);
  },
};
