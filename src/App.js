import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';
import Products from './pages/Products';
import Header from './components/Header';
import ShoppingCart from './pages/shopping-cart';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={ Products } />
            <Route exact path="/pages/shopping-cart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
        <CategoriesList />
      </div>
    );
  }
}

export default App;
