import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">Hello Trybe
    {/* <Header /> */}
    <Router>
      <Switch>
        <Route exact path="/" component={SearchBar} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
