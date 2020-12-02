import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartElements: 0
    }

    this.setCartElements = this.setCartElements.bind(this)
  }

  setCartElements() {
    const cartItems = localStorage.getItem('carrinho')
    if (cartItems) {
      const sum = JSON.parse(cartItems).reduce((acc, act) => (acc + act.quantity), 0)
      this.setState({ cartElements: sum })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <SearchPage modifyCart={this.setCartElements} cartItems={this.state.cartElements} />} />
          <Route path="/cart" component={CartPage} />
          <Route path="/detail" render={(props) => <DetailPage {...props} modifyCart={this.setCartElements} cartItems={this.state.cartElements} />} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
