import React from 'react';
import { Modal, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { ModalProps } from 'antd/lib/modal';


const FormItem = Form.Item;

interface AddPosterModalProps extends FormComponentProps, ModalProps {
  onOk: () => void,
  onClose: () => void,
};
interface AddPosterModalState {};


class AddPosterModal extends React.PureComponent<AddPosterModalProps, AddPosterModalState> {

  render() {
    const { visible, onClose } = this.props;
    return(
      <Modal
        visible={visible}
        title="添加文章"
        okText="确认"
        cancelText="取消"
        onCancel={onClose}
      >

      </Modal>
    )
  }
}

export default Form.create()(AddPosterModal)