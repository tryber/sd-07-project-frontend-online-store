import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import voltar from '../components/img/undo.png';
import ShoppingCartIcon from '../components/Shopping-cart-icon';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="ShoppingCart">
        <div className="headerS">
          <Link to="/">
            <img className="imagem" src={ voltar } alt="voltar" />
          </Link>
          <h3 className="headerSh3">Carrinho de compras</h3>
          <ShoppingCartIcon />
        </div>
        <div>
          <Cart botto={ this.atualizar } />
        </div>
        <button type="button">
          <Link className="payment" data-testid="checkout-products" to="/payment">
            finalizar compra
          </Link>
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
