import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartList from './pages/CartList';
import './App.css';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import * as cartAPI from './services/cartAPI';

class App extends Component {
  constructor() {
    super();
    this.updateCartAmount = this.updateCartAmount.bind(this);
    this.state = {
      quantidade: 0,
    };
  }

  updateCartAmount() {
    const itemsCart = cartAPI.getCart();
    const quantidadeNow = Object.values(itemsCart)
      .map((id) => id.quantidade)
      .reduce((a, b) => a + b);
    this.setState({ quantidade: quantidadeNow });
  }

  render() {
    const { quantidade } = this.state;
    return (
      <div className="App">
        <Router>
          <div>Projeto</div>
          <Link data-testid="shopping-cart-button" to="/cart">
            <div>CART</div>
            <div data-testid="shopping-cart-size">{quantidade}</div>
          </Link>
          <Switch>
            <Route path="/checkout" component={ Checkout } />
            <Route
              path="/product_Detail"
              render={ (props) => (
                <ProductDetail
                  { ...props }
                  updateCartAmount={ this.updateCartAmount }
                />
              ) }
            />
            <Route
              path="/cart"
              render={ () => (
                <CartList updateCartAmount={ this.updateCartAmount } />
              ) }
            />
            <Route
              exact
              path="/"
              render={ () => <Home updateCartAmount={ this.updateCartAmount } /> }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
