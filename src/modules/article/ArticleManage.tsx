import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

import { TagEnum } from '@/domains/tag-domain/constants';

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
    fullScreen: true,      // 全屏功能
  },
  table: {                 // 表格默认是几行几列
    maxRow: 5,
    maxCol: 6,
  }
};

class ArticleManage extends React.Component<ArticleManageProps, ArticleManageState> {

  state: ArticleManageState = {
    mode: 'preview',
    html: '',
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

  render() {
    const { mode, html } = this.state;
    return (
      <div className="article-manage">
        <div className="article-manage__header">
          <div className="title">文章标题</div>
          <div className="content">
            <div className="details">
              <div className="time">2020-03-03 19:45:33</div>
              <div className="tag-list">
                {
                  TagEnum.map((tag, idx) => {
                    return (
                      <div
                        className={`tag-item ${tag.color}`}
                        key={`tag${idx}`}
                      >前端</div>
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
                >&#xe62e;</span>
              }
              <span className="icon iconfont">&#xe600;</span>
              <span className="icon iconfont">&#xe68b;</span>
            </div>
          </div>
        </div>
        <div className="article-manage__body">
          {
            mode === 'write' ?
            <MdEditor
              renderHTML={this.renderHTML}
              config={mdEditorConfig}
              onChange={this.handleChangeEditor}
            />:
            <div
              className="preview-section"
              dangerouslySetInnerHTML={{__html: this.mdParser.render(html)}}
            ></div>
          }
        </div>
      </div>
    )
  }
}

export default ArticleManage;