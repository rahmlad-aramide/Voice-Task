import { cookieStorage } from '@ibnlanre/portal';
import axios from 'axios'

const PUBLIC_BASE_URL='https://voice-task-dev.onrender.com'

export const token = JSON.parse(cookieStorage.getItem('my-token'))

// creating an instance
export const AUTHAPI = axios.create({
  // baseURL: process.env.REAC_APP_PUBLIC_BASE_URL,
  baseURL: PUBLIC_BASE_URL
});

export const USETOKEN = axios.create({
  // baseURL: process.env.REACT_APP_PUBLIC_BASE_URL,
  baseURL: PUBLIC_BASE_URL,
  headers: {
    // Authorization: `Bearer ${token}`
    // apikey: '6508b27e2b66a05e77f8e04c',
    apikey: '6508b27e2b66a05e77f8e04c',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzEyMjdhMzcxZTdjYzkxMzg1YTI0YiIsImlhdCI6MTY5NzcyMTQ5NCwiZXhwIjoxNzI5Mjc5MDk0fQ.0SP2c6Evf5ENCvf_1V91wcdxs5q1qlmE6F8Xli4Fj7Q`
  }
});



AUTHAPI.interceptors.request.use(
  (req)=>{
    let token = cookieStorage.getItem("my-token");
    if(token){
      JSON.parse(token);
      req.headers.Authorization =  `Bearer ${token}`;
    }
  })