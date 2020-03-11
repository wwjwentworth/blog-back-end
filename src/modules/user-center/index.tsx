import React from 'react';
import EditBasicInfoModal from './component/EditBasicInfoModal';

import './index.less';

interface UserProps {};
interface UserState {
  showEditBasicInfoModal: boolean
};

class User extends React.Component<UserProps, UserState> {
  state: UserState = {
    showEditBasicInfoModal: false
  }
  handleShowBasicInfoModal = () => {
    this.setState({
      showEditBasicInfoModal: true
    })
  }

  render() {
    const { showEditBasicInfoModal } = this.state;
    return (
      <div className="page user-center-page">
        <div className="personal item">
          <div className="title">
            <span>Personal</span>
            <span
              className="icon iconfont"
              onClick={this.handleShowBasicInfoModal}
            >&#xe6a8;</span>
          </div>
          <div className="content">
            <img className="avatar" />
            <section>
              <div className="name">吴文洁</div>
              <div className="motto">这里是我的座右铭</div>
            </section>
          </div>
        </div>
        <div className="address item">
          <div className="title">Address</div>
          <div className="content"></div>
        </div>
        <div className="social-account item">
          <div className="title">Social Account</div>
          <div className="content"></div>
        </div>

        <EditBasicInfoModal
          visible={showEditBasicInfoModal}
        />
      </div>
    )
  }
}

export default User;