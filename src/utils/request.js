import router from '@/router';
import store from '@/store';
import axios from 'axios';
import { stringify } from 'qs';

const formContentType = 'application/x-www-form-urlencoded;charset=utf-8';
const methods = ['post', 'put', 'delete'];
const InvalidCode = 1000000;

// 创建axios实例
const request = axios.create({
  baseURL: '/api',
  timeout: 20000,
  withCredentials: true,
  headers: { 'Content-Type': formContentType },
});

// 拦截请求
request.interceptors.request.use(
  (config) => {
    const token = 'token';
    if (token) {
      config.headers.Token = token;
    }
    if (config.headers['Content-Type'] === formContentType && methods.includes(config.method)) {
      config.data = stringify(config.data);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 拦截响应
request.interceptors.response.use(
  (res) => {
    if (res.data && res.data.code) {
      if (res.data.code === 1) {
        return res.data.data;
      }
      if (res.data.code === InvalidCode) {
        store.commit('SET_TOKEN', '');
        router.replace({
          name: 'accountLogin',
          query: {
            redirect: router.currentRoute.value.fullPath,
          },
        });
        // window.location.reload();
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ msg: res.data.msg || '登录失效' });
    }
    return Promise.reject(new Error({ msg: 'Network error' }));
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default request;
