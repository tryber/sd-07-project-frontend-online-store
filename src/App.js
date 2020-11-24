import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PageCard from './PageCard';
// import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/PageCard" component={ PageCard } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
