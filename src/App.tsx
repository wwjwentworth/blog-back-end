/*
 * @Author: 吴文洁
 * @Date: 2020-02-16 18:26:23
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-04 13:26:42
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Router, Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SiderBar from '@/components/siderBar';

import HomePage from '@/modules/home';
import ArticleList from '@/modules/article/ArticleList';
import ArticleManage from '@/modules/article/ArticleManage';
import TagManage from '@/modules/tag/TagManage'

import 'antd/dist/antd.less';
import './App.less';

const history = createBrowserHistory();
const { Content } = Layout;

interface AppProps extends RouteComponentProps{};
interface Appstate {};

class App extends React.Component<AppProps, Appstate> {

  state: Appstate = {};

  render() {
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

export default withRouter(App);