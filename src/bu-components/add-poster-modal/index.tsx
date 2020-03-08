import React from 'react';
import { Modal, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { ModalProps } from 'antd/lib/modal';


const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
};

interface AddPosterModalProps extends FormComponentProps, ModalProps {
  onOk: () => void,
  onClose: () => void,
};
interface AddPosterModalState {};

class AddPosterModal extends React.PureComponent<AddPosterModalProps, AddPosterModalState> {

  // 提交文章
  handleSubmit = () => {
    this.props.form.validateFields((err, fields) => {
      if (err) return;
      const articleData = {
        ...fields,
        gmtCreate: +new Date()
      }
      this.props.onOk(articleData);
    })
  }

  render() {
    const { visible, onClose, form } = this.props;
    const { getFieldDecorator} = form;
    return(
      <Modal
        visible={visible}
        title="添加文章"
        okText="确认"
        cancelText="取消"
        onCancel={onClose}
        onOk={this.handleSubmit}
      >
        <Form>
          <FormItem
            label="文章标题"
            {...formItemLayout}
          >
            {
              getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '请输入文章标题'
                  },
                  {
                    max: 30,
                    message: '文章标题最多输入30个字'
                  }
                ]
              })(
                <Input placeholder="请输入文章标题" />
              )
            }
          </FormItem>
          <FormItem
            label="文章作者"
            {...formItemLayout}
          >
            {
              getFieldDecorator('author', {
                rules: [
                  {
                    required: true,
                    message: '请输入文章作者'
                  }
                ]
              })(
                <Input placeholder="请输入文章作者" />
              )
            }
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(AddPosterModal)