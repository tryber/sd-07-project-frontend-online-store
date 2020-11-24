import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import CartButton from './components/CartButton';


// Vamo que vamo

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/cart" component={ CartButton } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
