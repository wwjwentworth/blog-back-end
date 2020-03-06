/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 14:34:33
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-06 17:27:35
 * @Description:
 */

import { AxiosResponse } from 'axios';
import { getTagList, addTag } from '@/data-source/tag/requestApis';

interface Tag {
  name?: string,
  _id?: string
}

export default class TagService {
  static getTagList(params: StandardQuery) {
    return new Promise((resolve) => {
      getTagList(params).then((res: any) => {
        resolve(res.result);
      });
    });
  }

  static addTag(params: Tag) {
    return new Promise((resolve) => {
      addTag(params).then((res) => {
        resolve(true);
      });
    });
  }
}
