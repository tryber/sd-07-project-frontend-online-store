import React from 'react';
import './App.css';
import * as api from './services/api';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar'

function App() {
  api.getCategories().then(categories => { console.log(categories) })
  api.getProductsFromCategoryAndQuery().then(categories => { console.log(categories) })
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