import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
