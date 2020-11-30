import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ShoppingCart, ProductDetails } from './pages/index';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">TrybeLibre Online Store</header>
        <BrowserRouter>
          <Switch>
            <Route path="/cart" component={ ShoppingCart } />
            <Route
              path="/productdetails/:id"
              render={ (props) => <ProductDetails id={ props.match.params.id } /> }
            />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
