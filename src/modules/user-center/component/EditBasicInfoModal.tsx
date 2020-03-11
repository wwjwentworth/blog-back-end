import React from 'react';
import { Modal, Form, Input, Upload } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { ModalProps } from 'antd/lib/modal';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

interface EditBasicInfoModalProps extends FormComponentProps, ModalProps  {
  visible: boolean
};
interface EditBasicInfoModalState {};
class EditBasicInfoModal extends React.Component<EditBasicInfoModalProps, EditBasicInfoModalState> {

  render() {
    const { form, visible } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="编辑个人信息"
      >
        <Form>
          <FormItem
            label="姓名"
            {...formItemLayout}
          >
            {
              getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: '姓名不得为空'
                  }
                ]
              })(
                <Input placeholder="请输入姓名"/>
              )
            }
          </FormItem>
          <FormItem
            label="头像"
            {...formItemLayout}
          >
            {
              getFieldDecorator('avatar', {
                rules: [
                  {
                    required: true,
                    message: '头像不得为空'
                  }
                ]
              })(
                <Input placeholder="请输入头像链接" />
              )
            }
          </FormItem>
          <FormItem>
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(EditBasicInfoModal)