import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from '@/modules/home';
import ArticleList from '@/modules/article/ArticleList';
import ArticleManage from '@/modules/article/ArticleManage';

import 'antd/dist/antd.less';
import './App.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface AppState {
  collapsed: boolean
}

class App extends React.Component<{}, AppState> {

  state: AppState = {
    collapsed: false,
  }

  handleCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.handleCollapse}
        >
          <div className="logo">
            Wwj's博客后台系统
          </div>
          <Menu theme="dark" defaultSelectedKeys={['home']} mode="inline">
            <Menu.Item key="home">
              <NavLink to="/" activeClassName="active" exact>
                <span className="nav-text">首页</span>
              </NavLink>
            </Menu.Item>
            <SubMenu
              title="文章"
              key="article"
            >
                <Menu.Item key="article-list">
                  <NavLink to="/article/list" activeClassName="active" exact>
                    <span className="nav-text">文章列表</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="article-manage">
                  <NavLink to="/article/manage" activeClassName="active" exact>
                    <span className="nav-text">添加文章</span>
                  </NavLink>
                </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <div>header</div>
          </Header>
          <Content>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path="/article/list" component={ArticleList} />
              <Route path="/article/manage" component={ArticleManage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App;