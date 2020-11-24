import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
