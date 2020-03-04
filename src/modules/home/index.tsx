/*
 * @Author: 吴文洁
 * @Date: 2020-02-15 18:00:27
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-04 13:30:32
 * @Description:
 */
import React from 'react';
import SearchBar from '@/components/searchBar';
import { BLOG_TITLE, MOTTO } from '@/domain/user-domain/constants';
class HomePage extends React.Component {

  render() {
    return (
      <div className="page home-page">
        <section>
          <SearchBar>
            <div>lefr</div>
          </SearchBar>
        </section>
        <section>
          <div >2222</div>
        </section>
      </div>
    );
  }
}

export default HomePage;