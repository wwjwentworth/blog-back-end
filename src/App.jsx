/*
 * @Author: 吴文洁
 * @Date: 2020-02-16 18:26:23
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 19:12:46
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from '@/modules/home';
import ArticleList from '@/modules/article/ArticleList';
import ArticleManage from '@/modules/article/ArticleManage';
import TagManage from '@/modules/tag/TagManage'

import 'antd/dist/antd.less';
import './App.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
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
            <Menu.Item key="tag">
              <NavLink to="/tag/manage" activeClassName="active" exact>
                <span className="nav-text">标签管理</span>
              </NavLink>
            </Menu.Item>
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
              <Route path="/tag/manage" component={TagManage} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App;