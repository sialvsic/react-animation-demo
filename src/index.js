import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '../src/App';
import App from './Transition';

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);

//For Hot Module Replacement work in development
if (module.hot) {
  module.hot.accept();
}
