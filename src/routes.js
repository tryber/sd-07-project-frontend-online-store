import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ HomePage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
