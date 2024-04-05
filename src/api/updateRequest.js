import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL})

export const updateUser = (id, data, {method}) => {
    const token = localStorage.getItem("token")
    return API.put(`/api/:${id}`, data, { headers: { token } });
};