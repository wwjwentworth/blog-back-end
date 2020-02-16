import React from 'react';
import Header from '@/components/Header';

import { BLOG_TITLE, MOTTO } from '@/domain/user-domain/constants';
interface HomeProps {};
interface HomeState {};

class HomePage extends React.Component<HomeProps, HomeState> {

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