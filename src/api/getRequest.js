import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL})

export const getAnnouncements = ({method}) => { return API.get(`/api/${method}`) };

export const getOne = (id, {method}) => {return API.get(`/api/${method}/${id}`)};