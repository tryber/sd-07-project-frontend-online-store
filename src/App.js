import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import NotFound from './pages/NotFoud';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
// Comentário 3
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/product-details/:title" render={(props) => <ProductDetails {...props}/> } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
