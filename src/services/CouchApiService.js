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
export const register = async (fullname, email, phone, username, password, role) => (
    await instance.post('/register', {fullname, email, phone, username, password, role})
);

export const login = async (username, password) => (
    await instance.post('/signin', {username, password})
);

export const getAllUser = async () => (
    await instance.get('/users')
);

// Books
export const getAllBook = async () => (
    await instance.get('/booklist')
);

export const getBook = async (id) => (
    await instance.get(`/book/${id}`)
);

export const createBook = async (name, type, author, producer, amount) => (
    await instance.post('/books/addBook', {name, type, author, producer, amount})
);

export const editBook = async (id, name, type, author, producer, amount) => (
    await instance.patch(`/book/editBook/${id}`, {name, type, author, producer, amount})
);

export const deleteBook = async (id) => (
    await instance.delete(`/book/delete/${id}`)
);
