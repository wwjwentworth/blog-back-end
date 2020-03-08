/*
 * @Author: 吴文洁
 * @Date: 2020-03-08 10:39:31
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 20:24:44
 * @Description:
 */

export interface Article {
  title: string,     // 文章标题
  author: string,    // 文章作者
  tag: string,       // 文章标签
  html?: string,     // 文章内容
  gmtCreate: number, // 文章创建时间
  gmtModify: number  // 文章发布时间
}