/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';

export const formatResponse = (response) => {
  // Do something with response data
  const { data, status } = response;
  return { data, status };
};
export const formatError = (error) => {
  const { data, status } = error.response;
  return Promise.reject({ data, status });
};
export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    'https://desolate-atoll-28732.herokuapp.com',
});

/* axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
}); */
axiosInstance.interceptors.response.use(formatResponse, formatError);
/* axiosInstancePublic.interceptors.response.use(formatResponse, formatError); */
