import React from 'react';

import './index.less';

interface UserProps {};
interface UserState {};

class User extends React.Component<UserProps, UserState> {

  render() {
    return (
      <div className="page user-center-page">
        <section>
          <div className="personal">
            <div className="title">Personal</div>
            <div className="content"></div>
          </div>
          <div className="address">
            <div className="title">Address</div>
            <div className="content"></div>
          </div>
        </section>
        <section>
          <div className="contact">
            <div className="title">Contact</div>
            <div className="content"></div>
          </div>
        </section>
      </div>
    )
  }
}

export default User;