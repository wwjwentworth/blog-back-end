import React from 'react';
import PosterCard from '@/components/poster-card';

import './index.less';

interface CardProps {
  key: string,
  title?: string,            // 文章标题
  html?: string,             // 文章内容
  author?: string,           // 文章作者
  gmtCreate?: number,        // 文章创建时间
  onPreview?: () => void     // 点开预览文章
}
interface CardState {};

class BlogCard extends React.PureComponent<CardProps, CardState> {
  render() {
    return (
      <div className="poster-card">
        <div className="poster-card__title">文章标题</div>
        <div className="poster-card__content">
          《图解HTTP》读书笔记-简单的HTTP协议HTTP协议和TCP/IP协议族中众多协议一样，用于客户端和服务端之间的通信请求肯定是由客户端发出的，由服务端响应请求。换句话说，首先是从客户端开始建立通信的，服务端在没有接收到请求报文之前，是不会有任何响应的。请求报文的结构响应报文的组成HTTP是不保存状态的协议HTTP协议自身是不会对请求和响应之间的通信状态做和响应之间的通信状态做和响应之间的通信状态做
        </div>
        <div className="poster-card__footer">
          Posted by WWJ on February 17, 2020
        </div>
      </div>
    )
  }
}

export default BlogCard;