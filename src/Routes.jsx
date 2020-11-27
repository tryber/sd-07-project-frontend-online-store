import React from 'react';
import Home from './pages/Home.jsx';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras.jsx';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />   
        <Route path="/carrinho" component={CarrinhoDeCompras} />    
      </Switch>
    )
  }
}

export default Routes;