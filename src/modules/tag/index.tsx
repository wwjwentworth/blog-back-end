import React from 'react';
import SearchBar from '@/components/searchBar';

import TagList from './TagList';
import TagManage from './TagManage';

import './index.less';

interface TagState {};
interface TagProps {};

class Tag extends React.Component<TagProps, TagState> {

  render() {
    return (
      <div className="page tag-page">
        <div className="page-content">
          <aside>
            <SearchBar>
              <TagList />
            </SearchBar>
          </aside>
          <div className="tag">
            <TagManage />
          </div>
        </div>
      </div>
    )
  }
}

export default Tag;