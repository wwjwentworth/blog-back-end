/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 14:32:13
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-03 22:16:35
 * @Description:
 */

import axios from '@/common/api/http-client';
const prefix = 'http://localhost:8088/api/tag';

import { Tag } from '../../modules/tag/TagManage';

export function getTagList(params: StandardQuery) {
  return axios.post(prefix, params);
};

export function addTag(params: Tag) {
  return axios.post(`${prefix}/create`, params);
}