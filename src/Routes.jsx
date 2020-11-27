import React from 'react';
<<<<<<< HEAD
import ListagemDeProdutos from './pages/ListagemDeProdutos.jsx';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras.jsx';
import { Switch, Route } from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoDeCompras from './pages/CarrinhoDeCompras';
>>>>>>> 9fe4a3b1a5752aea54fea362c697a29533a879e2

class Routes extends React.Component {
  render() {
    return (
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={ListagemDeProdutos} />   
        <Route path="/carrinho" component={CarrinhoDeCompras} />    
        {/* o switch so admite route ou redirect dentro dele */}
      </Switch>
    )
  }
}

export default Routes;
=======
        <Route exact path="/" component={ Home } />
        <Route path="/carrinho" component={ CarrinhoDeCompras } />
      </Switch>
    );
  }
}

export default Routes;
>>>>>>> 9fe4a3b1a5752aea54fea362c697a29533a879e2
