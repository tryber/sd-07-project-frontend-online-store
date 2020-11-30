import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
<<<<<<< HEAD
import DetalhesDoProduto from './pages/DetalhesDoproduto';
=======
>>>>>>> main-group-2

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ CarrinhoDeCompras } />
<<<<<<< HEAD
        <Route path="/DetalhesDoProduto" component={ DetalhesDoProduto } /> 
=======
>>>>>>> main-group-2
      </Switch>
    );
  }
}

export default Routes;
