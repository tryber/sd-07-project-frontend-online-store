import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.state = {
      cart: [],
      totalQuantity: 0,
    };
    this.totalAmount = this.totalAmount.bind(this);
  }

  addItem(item) {
    this.setState((previousState) => ({
      cart: [...previousState.cart, item],
    }));
    this.totalAmount();
  }

  totalAmount() {
    const valueInit = 0;
    const { cart } = this.state;
    let { totalQuantity } = this.state;
    totalQuantity = cart.reduce((acc, item) => acc + parseInt(item.quantity, 10),
      valueInit);
    this.setState({ totalQuantity });
    console.log('TotalAmoutn APP: ', totalQuantity);
  }

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/product/:categoryId/:id"
              render={ (props) => (
                <ProductDetail addItem={ this.addItem } { ...props } />
              ) }
            />
            {' '}
            <Route
              exact
              path="/"
              render={ (props) => (
                <ProductList addItem={ this.addItem } cart={ cart } { ...props } />
              ) }
            />
            <Route
              exact
              path="/shoopingcart"
              render={ (props) => <ShoppingCart addItem={ this.addItem } cart={ cart } { ...props } /> }
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
