import { cookieStorage } from '@ibnlanre/portal';
import axios from 'axios'

export const token = JSON.parse(cookieStorage.getItem('token'))
export const baseURL= import.meta.env.VITE_APP_PUBLIC_BASEURL
export const apikey = import.meta.env.VITE_APP_PUBLIC_APIKEY

// creating an instance
export const AUTHAPI = axios.create({
  baseURL,
  headers: {
    apikey,
  }
});

export const USETOKEN = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    apikey,
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzEyMjdhMzcxZTdjYzkxMzg1YTI0YiIsImlhdCI6MTY5NzcyMTQ5NCwiZXhwIjoxNzI5Mjc5MDk0fQ.0SP2c6Evf5ENCvf_1V91wcdxs5q1qlmE6F8Xli4Fj7Q`
  }
});

// AUTHAPI.interceptors.request.use(
//   (req)=>{
//     let token = cookieStorage.getItem("token");
//     if(token){
//       JSON.parse(token);
//       req.headers.Authorization =  `Bearer ${token}`;
//     }
//   })