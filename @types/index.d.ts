/*
 * @Author: 吴文洁
 * @Date: 2020-03-03 21:52:13
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 15:15:19
 * @Description:
 */
// tslint:disable-next-line:no-reference
/// <reference path="jsx-control-statements.d.ts" />
interface StandardQuery {
  pageNo?: number,
  pageSize?: number
}

interface StandardResult {
  totalCount: number,
  records: any
}