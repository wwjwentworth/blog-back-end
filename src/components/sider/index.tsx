/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 21:54:17
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-03 23:03:31
 * @Description:
 */

import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
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

  render() {
    const { currentPathname } = this.state;
    return (
      <Sider width={100}>
        <div className="side-bar__content">
          <img className="avatar" />
          <div className="add-btn"><Icon type="plus" /></div>
          <div className="menu">
            <div
              className={`menu__item ${currentPathname === '/' ? 'active': '' }`}
            >
              <NavLink to="/"><Icon type="appstore" /></NavLink>
            </div>
            <div
              className={`menu__item ${currentPathname === '/tag' ? 'active': '' }`}
            >
              <NavLink to="/tag"><Icon type="tags" /></NavLink>
            </div>
            <div
              className={`menu__item ${currentPathname === '/help' ? 'active': '' }`}
            >
              <NavLink to="/help"><Icon type="question-circle" /></NavLink>
            </div>
            <div
              className={`menu__item ${currentPathname === '/setting' ? 'active': '' }`}
            >
              <NavLink to="/setting"><Icon type="setting" /></NavLink>
            </div>
          </div>
        </div>
      </Sider>
    )
  }
}

export default withRouter(SiderBar);