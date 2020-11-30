import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ShoppingCart, ProductDetails } from './pages/index';
import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
    this.state = { cartItems: [] };
  }

  addCart(product) {
    this.setState(({ cartItems }) => ({
      cartItems: [...cartItems, product],
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <header className="App-header">TrybeLibre Online Store</header>
        <BrowserRouter>
          <Switch>
            <Route
              path="/cart"
              render={ (props) => <ShoppingCart { ...props } cartItems={ cartItems } /> }
            />
            <Route
              path="/productdetails/:id"
              render={ (props) => <ProductDetails id={ props.match.params.id } /> }
            />
            <Route
              exact
              path="/"
              render={ (props) => <Home { ...props } addCart={ this.addCart } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
