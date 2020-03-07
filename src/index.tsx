/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 18:36:02
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-07 20:10:41
 * @Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

import articleStore from '@/modules/article/store';

import App from './App';

const stores = {
  articleStore
}

const RootRouter = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<RootRouter />, document.getElementById('root'));