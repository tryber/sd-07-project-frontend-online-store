import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import './App.css';
import ShoppingCartPage from './Pages/ShoppingCartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Header } />
          <Route exact path="/shopping-cart" component={ ShoppingCartPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
