/*
 * @Author: 吴文洁
 * @Date: 2020-02-16 18:26:23
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 22:09:46
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Switch } from 'react-router-dom';

import SiderBar from '@/components/sider';

import HomePage from '@/modules/home';
import ArticleList from '@/modules/article/ArticleList';
import ArticleManage from '@/modules/article/ArticleManage';
import TagManage from '@/modules/tag/TagManage'

import 'antd/dist/antd.less';
import './App.less';

const { Content } = Layout;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{minHeight: '100vh'}}>
        <SiderBar />
        <Content>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/article/list" component={ArticleList} />
            <Route path="/article/manage" component={ArticleManage} />
            <Route path="/tag/manage" component={TagManage} />
          </Switch>
        </Content>
      </Layout>
    )
  }
}

export default App;