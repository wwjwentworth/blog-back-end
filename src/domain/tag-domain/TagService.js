/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 14:34:33
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 20:15:49
 * @Description:
 */
import { getTagList, addTag } from '@/data-source/tag/requestApis';

export default class TagService {
  static getTagList(params) {
    return new Promise((resolve) => {
      getTagList(params).then((res) => {
        resolve(res.result);
      });
    });
  }

  static addTag(params) {
    return new Promise((resolve) => {
      addTag(params).then((res) => {
        resolve(true);
      });
    });
  }
}
