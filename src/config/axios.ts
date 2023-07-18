import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const axiosConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/inventario`,
  timeout: 30000,
  headers: defaultHeaders,
});

class HttpClient {
  static api = axiosConfig;
}

export default HttpClient;
