import React from 'react';

import { TagEnum } from '@/domains/tag-domain/constants';

interface ArticleManageProps {};
interface ArticleManageState {};

class ArticleManage extends React.Component<ArticleManageProps, ArticleManageState> {

  state: ArticleManageState = {

  }

  render() {
    return (
      <div className="article-manage">
        <div className="article-manage__header">
          <div className="title">文章标题</div>
          <div className="content">
            <div className="details">
              <div className="time">2020-03-03 19:45:33</div>
              <div className="tag-list">
                {
                  TagEnum.map((tag, idx) => {
                    return (
                      <div
                        className={`tag-item ${tag.color}`}
                        key={`tag${idx}`}
                      >前端</div>
                    )
                  })
                }
              </div>
            </div>
            <div className="operate">
              <span className="icon iconfont">&#xe62e;</span>
              <span className="icon iconfont">&#xe600;</span>
              <span className="icon iconfont">&#xe68b;</span>
            </div>
          </div>
        </div>
        <div className="article-manage__body"></div>
      </div>
    )
  }
}

export default ArticleManage;