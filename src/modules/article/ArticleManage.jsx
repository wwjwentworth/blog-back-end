import React from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import { Button, Form, Input, Upload, Select, message } from 'antd';

import axios from '@/common/api/http-client';
import TagService from '@/domain/tag-domain/TagService';

import "react-mde/lib/styles/css/react-mde-all.css";
import './ArticleManage.less';

const { Option } = Select;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    sm: { span: 2 },
  },
  wrapperCol: {
    sm: { span: 6 },
  }
};

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});


class ArticleManage extends React.Component {
  state = {
    value: '**Hello world!!!**',
    selectedTab: 'write',
    query: {
      pageNo: 0,
      pageSize: 10
    },
    cover: null,
    tagList: [],
    selectedTagList: [],
  }

  componentDidMount() {
    this.fetchTagList();
  }

  fetchTagList = () => {
    TagService.getTagList(this.state.query).then((res) => {
      const { records, totalCount } = res;
      this.setState({
        tagList: records,
      });
    });
  }

  handleChangeValue = (value) => {
    this.setState({ value })
  }

  handleChangeTab = (selectedTab) => {
    this.setState({ selectedTab })
  }

  handleChange = (options) => {
    const { file } = options;
  }

  // 保存博客
  handleSave = () => {
    this.props.form.validateFields((err, fields) => {
      if (err) return;
    })
    // 调接口
    const html = converter.makeHtml(this.state.value);
    axios.post('http://localhost:8088/api/article/create', {
      title: 'xxx',
      cover: html
    }).then((res) => {
      //
    })
  }

  handleChangeTag = (e) => {
    console.log(e)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      value, selectedTab, title,
      query, tagList, selectedTagList
    } = this.state;
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
              label="文章标签"
            >
              {
                getFieldDecorator('tags', {
                  initialValue: selectedTagList,
                })(
                  <Select
                    mode="multiple"
                    placeholder="请选择文章标签"
                    onChange={this.handleChangeTag}
                  >
                    {
                      tagList.map((tag, index) => {
                        return (
                          <Option
                            key={`option-${index}`}
                            lable={tag.name}
                            value={tag._id}
                          >
                            {tag.name}
                          </Option>
                        )
                      })
                    }
                  </Select>
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.handleSave}
          >保存</Button>
        </div>
      </div>
    );
  }
}

export default Form.create()(ArticleManage);