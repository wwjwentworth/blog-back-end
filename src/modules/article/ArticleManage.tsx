import React from 'react';
import { observer, inject } from 'mobx-react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import { Button, Modal } from 'antd';
import dayjs from 'dayjs';

import { TagColorNum, TagEnum } from '@/domains/tag-domain/constants';
import { TIME_FORMAT } from '@/domains/basic-domain/constants';

import 'react-markdown-editor-lite/lib/index.css';
import './index.less';

interface ArticleManageProps {};
interface ArticleManageState {
  mode: 'preview' | 'write',     // 模式：预览还是编辑
  html: string,
};

const mdEditorConfig = {
  view: {
    menu: true,           // 是否显示顶部菜单栏
    md: true,             // 是否显示编辑区
    html: true,           // 是否显示预览区
    fullScreen: true,     // 全屏功能
  },
  table: {                // 表格默认是几行几列
    maxRow: 5,
    maxCol: 6,
  }
};

@inject('articleStore')
@observer
class ArticleManage extends React.Component<ArticleManageProps, ArticleManageState> {

  state: ArticleManageState = {
    mode: 'preview',
  }

  mdParser: MarkdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  handleChangeMode = (mode: 'write' | 'preview') => {
    this.setState({ mode });
  }

  handleChangeEditor = ({html, text}: { html: string, text: string}) => {
    this.setState({ html });
  }

  renderHTML = (text: string) => {
    return this.mdParser.render(text);
  }

  // 删除文章
  handleDeleteArticle = () => {
    Modal.confirm({
      title: '是否确认删除文章',
      content: '删除之后文章不再复原',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        const { articleStore } = this.props;
        articleStore.deleteArticle();
      }
    })
  }

  render() {
    const { mode } = this.state;
    const { currentArticle } = this.props.articleStore;
    const { html = '', gmtCreate, title } = currentArticle;
    return (
      <div className="article-manage">
        <div className="article-manage__header">
          <div className="title">{title}</div>
          <div className="content">
            <div className="details">
              <div className="time">{dayjs(gmtCreate).format(TIME_FORMAT)}</div>
              <div className="tag-list">
                {
                  TagEnum.map((item, idx) => {
                    return (
                      <div
                        className={`tag-item ${TagColorNum[item.tag]}`}
                        key={`tag${idx}`}
                      >{item.name}</div>
                    )
                  })
                }
              </div>
            </div>
            <div className="operate">
              {
                mode === 'preview' ?
                <span
                  className="icon iconfont"
                  onClick={() => this.handleChangeMode('write')}
                >&#xe62e;</span> :
                <span
                  className="icon iconfont"
                  onClick={() => this.handleChangeMode('preview')}
                >&#xe72a;</span>
              }
              <span
                className="icon iconfont"
                onClick={this.handleDeleteArticle}
              >&#xe600;</span>
              <span className="icon iconfont">&#xe68b;</span>
            </div>
          </div>
        </div>
        <div className="article-manage__body">
          {
            mode === 'write' ?
            <div className="write-section">
              <MdEditor
                renderHTML={this.renderHTML}
                config={mdEditorConfig}
                onChange={this.handleChangeEditor}
              />
              <div className="release">
                <Button type="primary">发布</Button>
              </div>
            </div>
            :
            <div
              className="preview-section"
              dangerouslySetInnerHTML={{__html: this.mdParser.render(html)}}
            />
          }
        </div>
      </div>
    )
  }
}

export default ArticleManage;