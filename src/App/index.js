import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Basic from './component/basic';
import Home from './component/home';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={ true } component={ Home }/>
        <Route path="/basic" component={ Basic }/>
      </Router>
    );
  }
}

export default App;
