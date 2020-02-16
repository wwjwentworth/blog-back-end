import React from 'react';
import Nav from '../Nav';

import './index.less';

interface HeaderProps {
  title: string,
  subtitle: string,
  bgImg?: string
};
interface HeaderState {};

const defaultBgImg = 'https://image.xiaomaiketang.com/xm/MHC2pMySaK.png';

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
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