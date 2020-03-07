/*
 * @Author: 吴文洁
 * @Date: 2020-02-16 18:26:23
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-07 19:55:14
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Router, Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SiderBar from '@/bu-components/siderBar';

import Article from '@/modules/article';
import Tag from '@/modules/tag';
import UserCenter from '@/modules/user-center';

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
            <Route exact path='/' component={Article} />
            <Route path="/tag" component={Tag} />
            <Route path='/user-center' component={UserCenter} />
          </Switch>
        </Content>
      </Layout>
    )
  }
}

export default withRouter(App);