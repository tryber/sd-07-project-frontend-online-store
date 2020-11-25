import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import * as api from './services/api';
import Home from './pages/Home';
import CartList from './pages/CartList';
import './App.css'

class App extends Component {
  componentDidMount() {
    // exemplos de utilização da API
    api.getCategories().then((categories) => console.log(categories));
    api
      .getProductsFromCategoryAndQuery('MLB5672', 'Pneu')
      .then((result) => console.log(result));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>Projeto</div>
          <Link data-testid="shopping-cart-button" to="/cart">
            CART
          </Link>
          <Switch>
            <Route path="/cart" component={CartList} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
