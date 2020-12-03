import React from 'react';
import './style/categoryList.css';
/* import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'; */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart'; */
import MainPage from './pages/main-page';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/:id" component={ ProductDetails } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
