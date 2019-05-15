import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Transition from './Transition';
import TransitionPlus from './TransitionPlus';

const renderPage = (page) => {

  switch (page) {
    case 'app1':
      return <App/>;
    case 'app2':
      return <Transition/>;
    case 'app3':
      return <TransitionPlus/>;
  }
  return;
};

const Select = () => {
  const [page, setPage] = useState('app1');

  const result = renderPage(page);

  const onClick = (page) => {
    setPage(page);
  };

  const onClear = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <div className='fix-top'>
        <span>select a app: </span>
        <button onClick={ () => onClick('app1') }>app1</button>
        <button onClick={ () => onClick('app2') }>app2</button>
        <button onClick={ () => onClick('app3') }>app3</button>
        <button onClick={ () => onClear() }>clear url</button>
      </div>
      <div className='container'>
        { result }
      </div>
    </div>
  );
};

ReactDOM.render(
  <Select/>,
  document.getElementById('root'),
);

//For Hot Module Replacement work in development
if (module.hot) {
  module.hot.accept();
}
