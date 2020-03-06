/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 11:27:40
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-06 17:19:32
 * @Description:
 */
import React from 'react';
import PosterCard from '@/components/poster-card';

interface TagState {}
interface TagProps{} ;

class TagManage extends React.Component<TagProps, TagState> {
  state: TagState = {};

  render() {

    return (
      <div className="tag-manage">
        {
          [1, 2, 3, 4, 5].map((article, idx) => {
            return (
              <PosterCard
                key={`poster${idx}`}
              />
            )
          })
        }
      </div>
    )
  }
}

export default TagManage;