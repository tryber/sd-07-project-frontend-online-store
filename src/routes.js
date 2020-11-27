import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Index from './pages/Layout';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Index } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
