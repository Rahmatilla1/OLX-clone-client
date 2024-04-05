import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL})

export const addAnnouncement = (data, {method}) => {
    const token = localStorage.getItem("token")
    return API.post(`/api/${method}`, data, {headers: {token}})
};