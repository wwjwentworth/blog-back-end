import React from 'react';
import Header from '@/components/Header';

import { BLOG_TITLE, MOTTO } from '@/domain/user-domain/constants';
class HomePage extends React.Component {

  render() {
    return (
      <div className="page home-page">
        <Header
          title={BLOG_TITLE}
          subtitle={MOTTO}
        />
      </div>
    );
  }
}

export default HomePage;