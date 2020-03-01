/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 14:32:13
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 20:14:31
 * @Description:
 */

import axios from '@/common/api/http-client';
const prefix = 'http://localhost:8088/api/tag';

export function getTagList(params) {
  return axios.post(prefix, params);
};

export function addTag(params) {
  return axios.post(`${prefix}/create`, params);
}