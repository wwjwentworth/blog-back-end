/*
 * @Author: 吴文洁
 * @Date: 2020-02-29 16:59:46
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-03 22:07:11
 * @Description:
 */
import { message } from 'antd';
import axios, { AxiosResponse, AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
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