import React from 'react';
import { Icon } from 'antd';

interface ArticleListProps {};
interface ArticleListState {
  currentIdx: number
};

class ArticleList extends React.Component<ArticleListProps, ArticleListState> {
  state: ArticleListState = {
    currentIdx: 0
  }

  handleChangeCurrentArticle = (currentIdx: number) => {
    this.setState({ currentIdx })
  }

  render() {
    const { currentIdx } = this.state;
    return (
      <div className="aside-list">
        {
          [1, 2, 3, 4, 5, 6].map((item, idx) => {
            return (
              <div
                key={`aside${idx}`}
                className={`aside-list__item ${currentIdx === idx ? 'active' : ''}`}
                onClick={() => this.handleChangeCurrentArticle(idx)}
              >
                <div className="item-left">
                  <span className="icon iconfont">&#xe72a;</span>
                  <span className="title">文章标题</span>
                </div>
                <div className="item-right">2020-03-04</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ArticleList;