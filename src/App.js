import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsList from './Home';
import Cart from './pages/cart';
import Cartfull from './pages/cartfull';
import ProductDetails from './pages/productdetails';
import './App.css';
import Checkout from './pages/checkout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart({ id, title, price, thumbnail }) {
    const addProducts = {
      id,
      title,
      quantity: 1,
      price,
      thumbnail,
    };
    this.setState((prevState) => ({
      productsCart: [...prevState.productsCart, addProducts],
    }));
  }

  render() {
    const { productsCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ProductsList productsCart={ productsCart } addToCart={ this.addToCart } />
            ) }
          />
          <Route exact path="/pages/cart" component={ Cart } />
          <Route
            exact
            path="/pages/cartfull"
            render={ (props) => <Cartfull { ...props } /> }
          />
          <Route
            exact
            path="/pages/productdetails/:Id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="/pages/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
