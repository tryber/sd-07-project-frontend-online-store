import React from 'react';
import ListagemDeProdutos from './pages/ListagemDeProdutos.jsx';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras.jsx';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ListagemDeProdutos} />   
        <Route path="/carrinho" component={CarrinhoDeCompras} />    
        {/* o switch so admite route ou redirect dentro dele */}
      </Switch>
    )
  }
}

export default Routes;