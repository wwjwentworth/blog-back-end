/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 21:54:17
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 22:43:34
 * @Description: 
 */

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import './index.less';

const { Sider } = Layout;

class SiderBar extends React.Component {
  state = {
    currentPathname: null
  }
 
  componentWillReceiveProps(nextProps) {
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