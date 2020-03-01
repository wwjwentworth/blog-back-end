/*
 * @Author: 吴文洁
 * @Date: 2020-03-01 18:36:02
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-03-01 18:39:38
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<RootRouter />, document.getElementById('root'));