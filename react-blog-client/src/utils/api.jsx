import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3001/api/',
  headers: {
    'Content-Type': 'application/json'
  }
}

const jwt = localStorage.getItem('jwt');

if (jwt) {
  const token = `Bearer: ${jwt}`;
  config.headers['Authorization'] = token;
}

export default axios.create(config);
