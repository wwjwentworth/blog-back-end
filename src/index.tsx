import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

const RootRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<RootRouter />, document.getElementById('root'));