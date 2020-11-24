import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import cartButton from './components/cartButton';


// Vamo que vamo

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route exact path="/cart" component={ cartButton } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
