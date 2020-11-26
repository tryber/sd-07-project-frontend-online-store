import React from 'react';
import './style/categoryList.css';
/* import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'; */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
/* import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart'; */
import MainPage from './pages/main-page';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route exact path="/:id" component={ ProductDetails } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
