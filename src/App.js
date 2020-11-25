import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import NotFound from './components/NotFoud';
import ShoppingCart from './components/ShoppingCart';
// Comentário 2
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
