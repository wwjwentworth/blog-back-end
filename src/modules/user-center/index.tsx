import React from 'react';

import './index.less';

interface UserProps {};
interface UserState {};

class User extends React.Component<UserProps, UserState> {

  render() {
    return (
      <div className="page user-center-page">
        <section className="basic-info">
          <div className="personal item">
            <div className="title">Personal</div>
            <div className="content">
              <div className=""></div>
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
        </section>
      </div>
    )
  }
}

export default User;