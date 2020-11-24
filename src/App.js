import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import Listagem from './components/listagem';
import './App.css';

api.getCategories().then((categories) => { console.log(categories); });
api.getProductsFromCategoryAndQuery().then((categories) => { console.log(categories); });

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Listagem } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
