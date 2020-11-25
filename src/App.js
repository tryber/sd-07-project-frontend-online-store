import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, ShoppingCart } from './components/index';

class App extends Component {
  render() {
    return (
    /*   <div className="App">
        <header className="App-header">TrybeLibre Online Store</header> */
      <BrowserRouter>
        <Route to="/shoppingcart" component={ ShoppingCart } />
        <Route to="/" component={ Home } />
      </BrowserRouter>
    /*   </div> */
    );
  }
}

export default App;
