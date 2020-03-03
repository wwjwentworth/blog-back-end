/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 21:54:17
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-03 21:02:07
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

  componentWillReceiveProps(nextProps: SiderBarProps) {
    const { location: { pathname } } = nextProps
    this.setState({
      currentPathname: pathname
    })
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
              <Link to="/"><Icon type="appstore" /></Link>
            </div>
            <div
              className={`menu__item ${currentPathname === '/tag' ? 'active': '' }`}
            >
              <Link to="/tag"><Icon type="tags" /></Link>
            </div>
            <div
              className={`menu__item ${currentPathname === '/help' ? 'active': '' }`}
            >
              <Link to="/help"><Icon type="question-circle" /></Link>
            </div>
            <div
              className={`menu__item ${currentPathname === '/setting' ? 'active': '' }`}
            >
              <Link to="/setting"><Icon type="setting" /></Link>
            </div>
          </div>
        </div>
      </Sider>
    )
  }
}

export default withRouter(SiderBar);