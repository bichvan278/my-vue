import axios from 'axios';
import http from "../http-common";

const instance = axios.create({
    baseURL: http.WS_BASE_URL,
});

instance.interceptors.request.use(async (http) => {
    // const token = localStorage.getItem('token');
    // http.headers.Authorization = (token ? token : '');
    http.headers.ContentType = 'application/json';
    return http;
});

// Users
export const register = async (fullname, email, phone, username, password) => (
    await instance.post('/register', {fullname, email, phone, username, password})
);

export const login = async (username, password) => (
    await instance.post('/signin', {username, password})
);

// Books
export const getAllBook = async () => (
    await instance.get('/booklist')
);