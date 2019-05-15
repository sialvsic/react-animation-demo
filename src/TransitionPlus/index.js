import React, { cloneElement } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const childFactoryCreator = (props) => (child) => cloneElement(child, props);

const App = () => {
  return (
    <HashRouter>
      <main className='main'>
        <Route
          render={ ({ location }) => {
            return (
              <TransitionGroup
                childFactory={ childFactoryCreator({
                  classNames: location.state && location.state.fromPage
                    ? 'page-to-left'
                    : 'page-to-right',
                  timeout: 500,
                }) }
              >
                <CSSTransition
                  key={ location.pathname }
                  timeout={ 0 }
                  classNames=""
                >
                  <Route
                    render={ () => (
                      <Switch location={ location }>
                        <Route
                          exact={ true }
                          path="/"
                          component={ Home }
                        />
                        <Route
                          path="/page1"
                          component={ Page1 }
                        />
                        <Route
                          path="/page2"
                          component={ Page2 }
                        />
                        <Route
                          path="/page3"
                          component={ Page3 }
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
    </HashRouter>
  );
};

export default App;
