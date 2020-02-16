import React from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';

import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

interface ArticleManageState {
  value: string,
  selectedTab: "write" | "preview"
}

class ArticleManage extends React.Component<{}, ArticleManageState> {
  state: ArticleManageState = {
    value: '**Hello world!!!**',
    selectedTab: 'write',
  }

  handleChangeValue = (value: string) => {
    this.setState({ value })
  }

  handleChangeTab = (selectedTab: "write" | "preview") => {
    this.setState({ selectedTab })
  }
  render() {
    const { value, selectedTab } = this.state;
    return (
      <div className="page article-page-manage">
        <ReactMde
          value={value}
          onChange={this.handleChangeValue}
          selectedTab={selectedTab}
          onTabChange={this.handleChangeTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        />
      </div>
    );
  }
}

export default ArticleManage;