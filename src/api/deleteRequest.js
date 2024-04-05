import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL})

export const deleteAnnouncement = (id) => {
    const token = localStorage.getItem("token")
    return API.delete(`/api/:${id}`, { headers: { token } });
};

export const deleteUser = (id) => {
    const token = localStorage.getItem("token")
    return API.delete(`/api/user/:${id}`, { headers: { token } });
};