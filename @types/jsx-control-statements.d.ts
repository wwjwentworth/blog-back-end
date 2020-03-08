/*
 * @Author: 吴文洁
 * @Date: 2020-03-08 13:19:52
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 15:08:17
 * @Description: jsx-control-statement变量
 */
declare const If: React.SFC<{ condition: boolean }>;
declare const For: React.SFC<{ each: string; index: string; of: any[] }>;
declare const Choose: React.SFC;
declare const When: React.SFC<{ condition: boolean }>;
declare const Otherwise: React.SFC;
declare const With: React.SFC<{ [key: string]: any}>;