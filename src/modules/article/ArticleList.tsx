import React from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import dayjs from 'dayjs';

import { TIME_FORMAT } from '@/domains/basic-domain/constants';
import { Article } from '@/domains/article-domain/interface';

interface ArticleListProps {};
interface ArticleListState {
  currentIdx: number
};
@inject('articleStore')
@observer
class ArticleList extends React.Component<ArticleListProps, ArticleListState> {
  state: ArticleListState = {
    currentIdx: 0
  }

  handleChangeCurrentArticle = (currentIdx: number) => {
    this.setState({ currentIdx })
  }

  render() {
    const { articleList } = this.props.articleStore;
    const { currentIdx } = this.state;
    return (
      <div className="aside-inner article-list">
        {
          articleList.map((item: Article, idx: number) => {
            return (
              <div
                key={`article${idx}`}
                className={`aside-inner__item ${currentIdx === idx ? 'active' : ''}`}
                onClick={() => this.handleChangeCurrentArticle(idx)}
              >
                <div className="item-left">
                  <span className="icon iconfont">&#xe72a;</span>
                  <span className="title">{item.title}</span>
                </div>
                <div className="item-right">{dayjs(item.gtmCreate).format(TIME_FORMAT)}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ArticleList;