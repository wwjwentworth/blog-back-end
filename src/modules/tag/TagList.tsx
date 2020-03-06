import React from 'react';

interface TagListProps {};
interface TagListState {
  currentIdx: number
};

class TagList extends React.Component<TagListProps, TagListState> {
  state: TagListState = {
    currentIdx: 0
  };

  handleChangeCurrentTag = (currentIdx: number) => {
    //
  }

  render() {
    const { currentIdx } = this.state;
    return (
      <div className="aside-inner tag-list">
        {
          [1, 2, 3, 4, 5, 6].map((item, idx) => {
            return (
              <div
                key={`tag${idx}`}
                className={`aside-inner__item ${currentIdx === idx ? 'active' : ''}`}
                onClick={() => this.handleChangeCurrentTag(idx)}
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

export default TagList;