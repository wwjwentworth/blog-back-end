/*
 * @Author: 吴文洁
 * @Date: 2020-02-29 16:59:46
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 18:31:40
 * @Description:
 */

import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    if (error) {
      return Promise.reject(error.response.data.message);
    }
  }
);

export default axiosInstance;