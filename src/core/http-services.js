import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export const httpService = axios.create({
  baseURL: BASE_URL
})

export const httpInterceptedService = axios.create({
  baseURL: BASE_URL
})

httpInterceptedService.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    return config
  },
  (error) => Promise.reject(error)
)

// This part belongs to the cases which our token is expired
// and server return 401 status code
// So user must redirect to the login page and log-in again
httpInterceptedService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error);
  }
)