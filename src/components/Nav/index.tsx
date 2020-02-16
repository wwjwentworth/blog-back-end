import React from 'react';
import { Link } from 'react-router-dom';

import './index.less'

interface NavProps {};
interface NavState {};

class Nav extends React.Component<NavProps, NavState> {

  render() {
    return (
      <div className="header__nav">
        <div className="header__nav__left">
          <Link to="/">WWJ Blog</Link>
        </div>
        <div className="header__nav__right">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}

export default Nav;