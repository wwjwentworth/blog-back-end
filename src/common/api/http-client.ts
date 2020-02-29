/*
 * @Author: 吴文洁
 * @Date: 2020-02-29 16:59:46
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-02-29 17:06:08
 * @Description:
 */

import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    if (error) {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;