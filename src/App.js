import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import CartIcon from './components/CartIcon';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.handleTotalQuantity = this.handleTotalQuantity.bind(this);
    this.state = {
      cart: [],
      totalQuantity: 0,
    };
  }

  addItem(item) {
    let { totalQuantity, cart } = this.state;
    totalQuantity += 1;
    this.setState((previousState) => ({
      cart: [...previousState.cart, item],
      totalQuantity,
    }));
    console.log(item);
    localStorage.setItem(cart, JSON.stringify(item));
    localStorage.setItem('totalQuantity', totalQuantity);
  }

  handleTotalQuantity(op, item) {
    let { totalQuantity, cart } = this.state;
    if (op === '+') {
      totalQuantity += 1;
    } else if (op === '-') {
      totalQuantity -= 1;
    }
    for (let index = 0; index < Object.keys(cart); index += 1) {
      if (cart[index].id === item.id) {
        cart[index].quantity += 1;
        this.setState({
          cart,
          totalQuantity,
        });
        return;
      }
    }
    localStorage.setItem(cart, JSON.stringify(item));
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
