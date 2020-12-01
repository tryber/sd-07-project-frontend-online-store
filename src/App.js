import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ShoppingCart, ProductDetails } from './pages/index';
import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.removeItemCart = this.removeItemCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    this.state = {
      cartItems: [],
    };
  }

  componentDidUpdate() {
    this.handleLocalStorage();
  }

  handleLocalStorage() {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  addCart(product) {
    this.setState((previousValue) => ({
      cartItems: previousValue.cartItems.find(
        (p) => p.id === product.id,
      )
        ? previousValue.cartItems.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              countItems: p.countItems + 1,
            };
          }
          return p;
        }) : [...previousValue.cartItems, { ...product, countItems: 1 }],
    }));
  }

  removeItemCart(product) {
    this.setState((previousValue) => ({
      cartItems: previousValue.cartItems.some(
        (p) => p.id === product.id,
      )
        ? previousValue.cartItems.map((p) => {
          if (p.id === product.id) {
            if (p.countItems) {
              return {
                ...p,
                countItems: p.countItems - 1,
              };
            }
          }
          return p;
        }) : [...previousValue.cartItems, { ...product, countItems: 1 }],
    }));
  }

  removeCart(productRemove) {
    this.setState((previousValue) => {
      const listItems = [...previousValue.cartItems];
      const indiceItem = listItems.findIndex((p) => p.id === productRemove.id);
      listItems.splice(indiceItem, 1);
      return { cartItems: listItems };
    });
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
              render={ (props) => (
                <ShoppingCart
                  { ...props }
                  addCart={ this.addCart }
                  removeItemCart={ this.removeItemCart }
                  removeCart={ this.removeCart }
                  cartItems={ cartItems }
                />) }
            />
            <Route
              path="/productdetails/:id"
              render={ (props) => (<ProductDetails
                addCart={ this.addCart }
                id={ props.match.params.id }
              />) }
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
