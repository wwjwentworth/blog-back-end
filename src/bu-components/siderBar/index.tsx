/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 21:54:17
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-08 21:36:39
 * @Description:
 */

import React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Layout, Icon } from 'antd';
import AddPosterModal from '@/bu-components/add-poster-modal';
import Avatar from '@/assets/image/avatar.jpeg';

import './index.less';

const { Sider } = Layout;
// const Avatar = require('@/assets/image/avatar.jpeg');

interface SiderBarState {
  currentPathname?: string,
  showAddPosterModal: boolean
};

interface SiderBarProps extends RouteComponentProps {};

@inject('articleStore')
@observer
class SiderBar extends React.Component<SiderBarProps, SiderBarState> {
  state: SiderBarState = {
    showAddPosterModal: false
  }

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

  handleToggleAddPosterModal = () => {
    this.setState({
      showAddPosterModal: !this.state.showAddPosterModal
    });
  }

  handleAddPoster = (articleData) => {
    const { articleStore } = this.props;
    articleStore.addArticle(articleData));
    this.handleToggleAddPosterModal();
  }

  render() {
    const { currentPathname, showAddPosterModal } = this.state;
    return (
      <div className="sider-bar">
        <Link to="/user-center">
          <img className="avatar" src={Avatar} />
        </Link>
        <div
          className="add-btn"
          onClick={this.handleToggleAddPosterModal}
        >
          <Icon type="plus" />
        </div>
        <div className="menu">
          <div
            className={`menu__item ${currentPathname === '/' ? 'active': '' }`}
          >
            <Link to="/"><Icon type="appstore" /></Link>
          </div>
          <div
            className={`menu__item ${this.getExtraClass('tag')}`}
          >
            <Link to="/tag"><Icon type="tags" /></Link>
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

        <AddPosterModal
          visible={showAddPosterModal}
          onOk={this.handleAddPoster}
          onClose={this.handleToggleAddPosterModal}
        />
      </div>
    )
  }
}

export default withRouter(SiderBar);