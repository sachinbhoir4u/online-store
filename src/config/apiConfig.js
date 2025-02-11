import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/';

const apiClient = axios.create({
  baseURL: baseURL, 
  headers: {
    'Content-Type': 'application/json',
    // Accept: 'application/json',
  }
//   timeout: 5000,
});

export default apiClient;
