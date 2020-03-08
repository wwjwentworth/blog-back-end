/*
 * @Author: 吴文洁
 * @Date: 2020-02-15 18:00:27
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 15:57:23
 * @Description:
 */
import React from 'react';
import { observer, inject } from 'mobx-react';
import { Input, Empty } from 'antd';
import SearchBar from '@/components/searchBar';
import { BLOG_TITLE, MOTTO } from '@/domains/user-domain/constants';

import ArticleList from '@/modules/article/ArticleList';
import ArticleManage from '@/modules/article/ArticleManage';

import './index.less';

interface ArticleProps {};
interface ArticleState {};

@inject('articleStore')
@observer
class Article extends React.Component<ArticleProps, ArticleState> {
  render() {
    const { articleStore } = this.props;
    const { articleList } = articleStore;

    return (
      <div className="page article-page">
        {
          !!articleList.length ?
          <div className="page-content">
            <aside>
              <SearchBar>
                <ArticleList />
              </SearchBar>
            </aside>
            <section className="article">
              <ArticleManage />
            </section>
          </div> :
          <div className="empty">
            <Empty
              description="暂无数据"
            />
          </div>
        }
      </div>
    );
  }
}

export default Article;