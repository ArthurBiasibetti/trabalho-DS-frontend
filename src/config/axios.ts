import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const axiosConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 30000,
  headers: defaultHeaders,
});

console.log(import.meta.env.VITE_API_URL)

class HttpClient {
  static api = axiosConfig;
}

export default HttpClient;
