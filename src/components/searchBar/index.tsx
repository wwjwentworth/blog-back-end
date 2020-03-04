/*
 * @Author: 吴文洁
 * @Date: 2020-03-04 13:26:58
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-04 21:17:07
 * @Description:
 */

import React, { ReactElement  } from 'react';
import { Input } from 'antd';

import './index.less';

interface SearchBarProps {};
interface SearchBarState {
  queryworld?: string
};



class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state: SearchBarState = {};

  handleChangeQueryWorld = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ queryworld: value });
  }

  render() {
    const { queryworld } = this.state;
    const childrenWithProps = React.Children.map(this.props.children,
      (child: ReactElement) => React.cloneElement(child, { queryworld }));
    return (
      <div className="search-bar">
        <div className="search-bar__header">
          <Input onChange={this.handleChangeQueryWorld} />
        </div>
        <div className="search-bar__pdy">
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default SearchBar;