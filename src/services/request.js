import axios from 'axios';

import {TIMEOUT, BASE_URL, token} from "./config";

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: BASE_URL
})


// 请求拦截器
instance.interceptors.request.use(config => {
  // config.headers['Authorization'] = token
  return config;
}, err => {
  return err;
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = "请求错误";
        break;
      case 401:
        err.message = "未授权访问";
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
})

export default instance;
