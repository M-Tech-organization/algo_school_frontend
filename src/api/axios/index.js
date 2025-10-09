// import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.DEV ? '/api' : 'https://algoschool.test-app.uz/api/v1',
//   withCredentials: false,
//   headers: { 'Content-Type': 'application/json' },
// });

// // token qo'shish uchun interceptor
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// }, err => Promise.reject(err));

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // shu bilan env dan olamiz
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
