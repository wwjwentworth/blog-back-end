/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 11:57:29
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 18:35:07
 * @Description:
 */

function _find(collection, predicate) {
  let index = -1;
  const length = collection == null ? 0 : collection.length;

  while(++index < length) {
    const value = collection[index];
    if (predicate(value, index, collection)) {
      return value;
    }
  }
}

export default _find;