import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.state = {
      cart: [],
    };
  }

  addItem(item) {
    this.setState((previousState) => (
      { cart: [...previousState.cart, item] }
    ));
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
              render={
                (props) => <ProductDetail addItem={ this.addItem } { ...props } />
              }
            />
            <Route
              exact
              path="/"
              render={ () => <ProductList addItem={ this.addItem } /> }
            />
            <Route
              exact
              path="/shoopingcart"
              render={ (props) => <ShoppingCart cart={ cart } { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
