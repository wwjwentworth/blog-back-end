/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 21:54:17
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-04 13:22:21
 * @Description:
 */

import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Layout, Icon } from 'antd';

import './index.less';

const { Sider } = Layout;

interface SiderBarState {
  currentPathname?: string
};
interface SiderBarProps extends RouteComponentProps {};

class SiderBar extends React.Component<SiderBarProps, SiderBarState> {
  state: SiderBarState = {}

  static getDerivedStateFromProps(nextProps: SiderBarProps) {
    const { location: { pathname } } = nextProps;

    return {
      currentPathname: pathname
    }
  }

  getExtraClass = (pathname: string) => {
    const { currentPathname } = this.state;
    return currentPathname.indexOf(pathname) > -1 ? 'active' : '';
  }

  render() {
    const { currentPathname } = this.state;
    return (
      <div className="sider-bar">
        <img className="avatar" />
        <div className="add-btn"><Icon type="plus" /></div>
        <div className="menu">
          <div
            className={`menu__item ${currentPathname === '/' ? 'active': '' }`}
          >
            <Link to="/"><Icon type="appstore" /></Link>
          </div>
          <div
            className={`menu__item ${this.getExtraClass('tag')}`}
          >
            <Link to="/tag/manage"><Icon type="tags" /></Link>
          </div>
          <div
            className={`menu__item ${this.getExtraClass('help')}`}
          >
            <Link to="/help"><Icon type="question-circle" /></Link>
          </div>
          <div
            className={`menu__item ${this.getExtraClass('setting')}`}
          >
            <Link to="/setting"><Icon type="setting" /></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SiderBar);