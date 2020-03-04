/*
 * @Author: 吴文洁
 * @Date: 2020-03-04 13:26:58
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-04 13:29:20
 * @Description:
 */

import React from 'react';

interface SearchBarProps {};
interface SearchBarState {};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state: SearchBarState = {};

  render() {
    return (
      <div className="search-bar">
        <div className="search-bar__header"></div>
        <div className="search-bar__bpdy">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default SearchBar;