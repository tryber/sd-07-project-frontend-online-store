import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <Router>
        <Link to="/">Search Bar</Link>
        <Switch>
          <Route exact path="/" component={SearchBar} />
        </Switch>
    </Router>
  );
}

export default App;
