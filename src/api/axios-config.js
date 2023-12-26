import { cookieStorage } from '@ibnlanre/portal';
import axios from 'axios'

export const token = cookieStorage.getItem('token')
// export const baseURL= import.meta.env.VITE_APP_PUBLIC_BASEURL
// export const apikey = import.meta.env.VITE_APP_PUBLIC_APIKEY

const baseURL='https://voice-task-dev.onrender.com'
const apikey='6508b27e2b66a05e77f8e04c'

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
  }
});

// USETOKEN.interceptors.request.use(
//   (req)=>{
//     let token = cookieStorage.getItem("token");
//     if(token){
//       req.headers.Authorization =  `Bearer ${token}`;
//     }
//   })