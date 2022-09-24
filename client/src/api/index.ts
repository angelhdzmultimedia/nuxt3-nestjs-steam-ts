import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
  
  headers: {
    'Access-Control-Allow-Origin' : 'http://localhost:3000',
    'Access-Control-Allow-Methods':'GET,POST',  
  },
})