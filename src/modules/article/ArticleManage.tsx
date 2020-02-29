import React from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import { Button, Form, Input, Upload } from 'antd';
import { FormComponentProps, FormItemProps } from 'antd/lib/form';
import { UploadChangeParam } from 'antd/lib/upload';

import axios from '@/common/api/http-client';

import "react-mde/lib/styles/css/react-mde-all.css";
import './ArticleManage.less';

const FormItem = Form.Item;
const formItemLayout: FormItemProps = {
  labelCol: {
    sm: { span: 2 },
  },
  wrapperCol: {
    sm: { span: 6 },
  }
};


type File = UploadChangeParam['file'];
type FileList = UploadChangeParam['fileList'];

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

interface ArticleManageProps extends FormComponentProps {};
interface QueryProps {
  title: string,
  cover: string,
  html: string,
  tags: string[]
}
interface ArticleManageState {
  value: string,
  selectedTab: "write" | "preview",
  query: QueryProps
}

class ArticleManage extends React.Component<ArticleManageProps, ArticleManageState> {
  state: ArticleManageState = {
    value: '**Hello world!!!**',
    selectedTab: 'write',
    query: {
      title: '',
      cover: '',
      html: '',
      tags: []
    }
  }

  handleChangeValue = (value: string) => {
    this.setState({ value })
  }

  handleChangeTab = (selectedTab: "write" | "preview") => {
    this.setState({ selectedTab })
  }

  handleChange = (options: any) => {
    const { file } = options;
  }

  // 保存博客
  handleSave = () => {
    // 调接口
    const html = converter.makeHtml(this.state.value);
    axios.post('http://localhost:8088/api/article/create', {
      title: 'xxx',
      cover: html
    }).then((res) => {
      //
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { value, selectedTab, query } = this.state;
    const { title, cover } = query;
    return (
      <div className="page page-article-manage">
        <div className="page-header"></div>
        <div className="page-body">
          <Form>
            <FormItem
              {...formItemLayout}
              label="文章标题"
            >
              {
                getFieldDecorator('title', {
                  initialValue: title,
                  rules: [
                    {
                      required: true,
                      message: '请输入文章标题'
                    }
                  ]
                })(<Input placeholder="请输入文章标题" />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="文章封面"
            >
              {
                getFieldDecorator('cover', {
                  initialValue: {
                    uid: -1,
                    img_url: cover
                  },
                  valuePropName: 'fieldList'
                })(
                  <Upload
                    action=''
                    accept='image/*'
                    onChange={this.handleChange}
                  >
                    +
                  </Upload>
                )
              }
            </FormItem>
          </Form>

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

        <div className="page-footer">
          <Button type="primary" onClick={this.handleSave}>保存</Button>
        </div>
      </div>
    );
  }
}

export default Form.create()(ArticleManage);