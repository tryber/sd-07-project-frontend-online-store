import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import voltar from '../components/img/undo.png';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <img className="imagem" src={ voltar } alt="voltar" />
          </Link>
          <div>
            <h3>Carrinho de compras</h3>
          </div>
          <Cart />
        </div>
        <Link data-testid="checkout-products" to="/payment">finalizar compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
