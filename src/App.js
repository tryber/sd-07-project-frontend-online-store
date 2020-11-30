import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import CartList from './pages/CartList';
import './App.css';
import ProductDetail from './pages/ProductDetail';


class App extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      addToCart: [],
    };
  }



  addToCart() {}
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>Projeto</div>
          <Link data-testid="shopping-cart-button" to="/cart">
            CART
          </Link>
          <Switch>
            <Route
              path="/product_Detail"
              render={(props) => <ProductDetail {...props } />}
            />
            <Route path="/cart" component={ CartList } />
            <Route exact path="/" component={ Home } />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
