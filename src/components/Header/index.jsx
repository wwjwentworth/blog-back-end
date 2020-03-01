/*
 * @Author: 吴文洁
 * @Date: 2020-02-15 20:13:57
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 19:20:20
 * @Description: 
 */
import React from 'react';
import Nav from '../Nav';

import './index.less';

const defaultBgImg = 'https://image.xiaomaiketang.com/xm/MHC2pMySaK.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="header" style={{backgroundImage: `url(${defaultBgImg})`}}>
        <Nav />
        <div className="header__title">{title}</div>
        <div className="header__sub-title">{subtitle}</div>
      </div>
    );
  }
}

export default Header;