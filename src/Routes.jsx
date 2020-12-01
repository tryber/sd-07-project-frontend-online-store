import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
import DetalhesDoProduto from './pages/DetalhesDoProduto';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ CarrinhoDeCompras } />
        <Route path="/detalhes" component={ DetalhesDoProduto } />
      </Switch>
    );
  }
}

export default Routes;
