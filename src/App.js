import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Listagem from './pages/listagem';
import Carrinho from './pages/carrinho';
import ProductDetails from './pages/productDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Listagem } />
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route exact path="/ProductDetails/:id" component={ ProductDetails } />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
