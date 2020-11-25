import React from 'react';
import './App.css';
import * as api from './services/api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar'

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  api.getProductsFromCategoryAndQuery().then(categories => { console.log(categories) })
  return (
    <div className="App">
      <header>
        <Router>
          <Link to="/"></Link>
          <Switch>
            <Route exact path="/" component={SearchBar} />
          </Switch>
        </Router>
      </header> 
    </div>

  );
}

export default App;