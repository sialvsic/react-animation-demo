import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Nav from './component/nav/Nav';
import Home from './Home';
import About from './About';
import Name from './Name';

const App = () => (
  <HashRouter>
    <>
      <Nav/>
      <main className='main'>
        <Route
          render={ ({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  key={ location.pathname }
                  classNames="page"
                  timeout={ {
                    enter: 1000,
                    exit: 1000,
                  } }
                >
                  <Route
                    location={ location }
                    render={ () => (
                      <Switch>
                        <Route
                          exact={ true }
                          path="/"
                          component={ Home }
                        />
                        <Route
                          path="/about"
                          component={ About }
                        />
                        <Route
                          path="/name"
                          component={ Name }
                        />
                      </Switch>
                    ) }
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          } }
        />
      </main>
    </>
  </HashRouter>
);

export default App;
