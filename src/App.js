import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesList from './components/CategoriesList';
import Home from './components/Home';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (


    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/" component={ CategoriesList } />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
