import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className="App">
      Hello Trybers
      { /* <Header /> */ }
      <Router>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          { /* <Route component={NotFound} /> */ }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
