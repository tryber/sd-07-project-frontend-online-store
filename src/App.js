import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import CartIcon from './components/CartIcon';
import './App.css';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor() {
    const total = JSON.parse(localStorage.getItem('totalQuantity'));
    super();
    this.addItem = this.addItem.bind(this);
    this.handleTotalQuantity = this.handleTotalQuantity.bind(this);
    this.state = {
      cart: [],
      totalQuantity: total,
    };
  }

  addItem(item) {
    const { totalQuantity } = this.state;
    const newTotal = totalQuantity + 1;

    this.setState((previousState) => ({
      cart: [...previousState.cart, item],
      totalQuantity: newTotal,
    }));
    localStorage.setItem('cart', JSON.stringify(item));
    localStorage.setItem('totalQuantity', newTotal);
  }

  handleTotalQuantity(op, item) {
    let { totalQuantity } = this.state;
    const { cart } = this.state;
    const sizeCart = Object.keys(cart).length;
    const zero = 0;

    if (op === '+') {
      totalQuantity += 1;
    } else if (op === '-' && totalQuantity > sizeCart) {
      totalQuantity -= 1;
    }

    for (let index = zero; index < Object.keys(cart).length; index += 1) {
      if (cart[index].id === item.id) {
        if (op === '+') cart[index].quantity += 1;
        if (op === '-' && cart[index].quantity > 1) cart[index].quantity -= 1;

        this.setState({ cart });

        break;
      }
    }
    console.log(totalQuantity);
    this.setState({ totalQuantity });
    localStorage.setItem('cart', JSON.stringify(item));
    localStorage.setItem('totalQuantity', totalQuantity);
  }

  render() {
    const { cart } = this.state;
    let { totalQuantity } = this.state;
    totalQuantity = localStorage.getItem('totalQuantity');
    return (
      <div className="App">
        <BrowserRouter>
          <CartIcon totalQuantity={ totalQuantity } />
          <Switch>
            <Route
              exact
              path="/checkout"
              render={
                (props) => <Checkout cart={ cart } { ...props } />
              }
            />
            <Route
              exact
              path="/product/:categoryId/:id"
              render={ (props) => (
                <ProductDetail
                  addItem={ this.addItem }
                  { ...props }
                  handleTotalQuantity={ this.handleTotalQuantity }
                />
              ) }
            />
            {' '}
            <Route
              exact
              path="/"
              render={ (props) => (
                <ProductList
                  addItem={ this.addItem }
                  cart={ cart }
                  { ...props }
                  handleTotalQuantity={ this.handleTotalQuantity }
                />
              ) }
            />
            <Route
              exact
              path="/shoopingcart"
              render={ (props) => (
                <ShoppingCart
                  addItem={ this.addItem }
                  cart={ cart }
                  { ...props }
                  handleTotalQuantity={ this.handleTotalQuantity }
                />) }
            />
          </Switch>
          {' '}
        </BrowserRouter>
        {' '}
      </div>
    );
  }
}

export default App;
