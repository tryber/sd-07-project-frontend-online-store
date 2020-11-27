import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Purchase from './components/Purchase';

// Vamo que vamo
// prettier-ignore
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/cart" component={ Cart } />
          <Route
            exact
            path="/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
        <Route exact path="/cart/purchase" component={ Purchase } />
      </BrowserRouter>
    );
  }
}

export default App;
