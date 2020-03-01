/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 11:27:40
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 19:19:08
 * @Description: 
 */
import React from 'react';
import { Button, Modal, Input, message } from 'antd';
import axios from '@/common/api/http-client';
import _find from '@/common/utils/_find';
import TagService from '@/domain/tag-domain/TagService';

class TagManage extends React.Component {
  state = {
    showTagModal: false,
    currentTag: {},
    tagList: []
  };

  componentDidMount() {
    this.fetchTagList();
  }

  fetchTagList = () => {
    TagService.getTagList({
      pageNo: 0,
      pageSize: 10
    }).then((res) => {
      console.log(res)
    })
  }

  handleShowTagModal = () => {
    this.setState({
      showTagModal: true
    });
  }

  handleHiddenTagModal = () => {
    this.setState({
      showTagModal: false
    });
  }

  handleChangeTag = (event) => {
    const { value } = event.target;
    this.setState({
      currentTag: {
        ...this.state.currentTag,
        name: value
      }
    });
  }

  handleAddTag = () => {
    const { currentTag, tagList } = this.state;
    const { name } = currentTag;
    if (_find(tagList, (item) => item.name === name)) {
      message.warn('该标签已存在！');
      return;
    };
    // axios.post("http://local")
  }

  render() {
    const { showTagModal, currentTag } = this.state;
    return (
      <div className="page page-tag-manage">
        <div className="page-header">
          <Button type="primary" onClick={this.handleShowTagModal}>添加标签</Button>
        </div>
        <div className="page-body"></div>
        <div className="page-footer"></div>

        <Modal
          visible={showTagModal}
          title={`${currentTag.id ? '编辑' : '添加'}标签`}
          okText="确定"
          cancelText="取消"
          onOk={this.handleAddTag}
          onCancel={this.handleHiddenTagModal}
        >
          <Input
            value={currentTag.name}
            placeholder="请输入标签名称"
            onChange={this.handleChangeTag}
          />
        </Modal>
      </div>
    )
  }
}

export default TagManage;