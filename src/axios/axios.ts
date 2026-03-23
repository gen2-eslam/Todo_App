import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.0.2.2:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.data);
    return Promise.reject(error);
  },
);

export default axiosInstance;
