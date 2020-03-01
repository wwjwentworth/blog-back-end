/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 11:27:40
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 20:39:07
 * @Description: 
 */
import React from 'react';
import { Button, Modal, Input, message, Table, Pagination } from 'antd';
import axios from '@/common/api/http-client';
import _find from '@/common/utils/_find';
import TagService from '@/domain/tag-domain/TagService';

class TagManage extends React.Component {
  state = {
    showTagModal: false,
    currentTag: {},
    tagList: [],
    query: {
      pageNo: 0,
      pageSize: 10
    }
  };

  componentDidMount() {
    this.fetchTagList();
  }

  fetchTagList = () => {
    TagService.getTagList(this.state.query).then((res) => {
      const { records, totalCount } = res;
      this.setState({
        tagList: records,
        totalCount
      });
    });
  }

  getColumns = () => {
    const columns = [
      {
        title: '名称',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: '操作',
        key: 'operate',
        dataIndex: 'operate',
        render: (val, row) => {
          return (
            <div className="operate">
              <span className="edit">编辑</span>
              <span className="divider"></span>
              <span className="delete">删除</span>
            </div>
          )
        }
      }
    ];

    return columns;
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
    TagService.addTag({ name }).then(res => {
      message.success('添加成功！');
      this.handleHiddenTagModal();
      this.fetchTagList();
    });
  }
  handleChangePage = (current) => {
    this.setState({
      query: {
        ...this.state.query,
        pageNo: current
      }
    }, this.fetchTagList() )
  }

  render() {
    const {
      showTagModal, currentTag, tagList,
      query, totalCount,
    } = this.state;
    const { pageNo, pageSize } = query;
    return (
      <div className="page page-tag-manage">
        <div className="page-header">
          <Button type="primary" onClick={this.handleShowTagModal}>添加标签</Button>
        </div>
        <div className="page-body">
          <Table
            size="small"
            rowKey={row => row._id}
            columns={this.getColumns()}
            dataSource={tagList}
            pagination={false}
          />
        </div>
        <div className="page-footer">
          <Pagination
            current={pageNo}
            size={pageSize}
            total={totalCount}
            onChange={this.handleChangePage}
          />
        </div>

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