import React from 'react';
import './App.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ SearchBar } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Link to="/shopping-cart">
          <ShoppingCartOutlinedIcon data-testid="shopping-cart-button" />
        </Link>
        <Route path="/" component={ SearchBar } />
      </BrowserRouter>
    </div>
  );
}

export default App;
