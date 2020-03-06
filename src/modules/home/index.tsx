/*
 * @Author: 吴文洁
 * @Date: 2020-02-15 18:00:27
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-06 15:40:05
 * @Description:
 */
import React from 'react';
import { Input } from 'antd';
import SearchBar from '@/components/searchBar';
import { BLOG_TITLE, MOTTO } from '@/domains/user-domain/constants';

import ArticleList from '@/modules/article/ArticleList';
import ArticleManage from '@/modules/article/ArticleManage';

import './index.less';
class HomePage extends React.Component {

  render() {
    return (
      <div className="page home-page">
        <aside>
          <SearchBar>
            <ArticleList />
          </SearchBar>
        </aside>
        <section className="article">
          <ArticleManage />
        </section>
      </div>
    );
  }
}

export default HomePage;