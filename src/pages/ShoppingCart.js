import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';
import voltar from '../components/img/undo.png';
import ShoppingCartIcon from '../components/Shopping-cart-icon';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.atualizar = this.atualizar.bind(this);
    this.state = {
      cart: false,
    };
  }

  async atualizar() {
    const comp = [];
    const cartitems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartitems.length > comp.length && this.state === false) {
      await this.setState({ cart: true });
    }
  }

  render() {
    this.atualizar();
    const { cart } = this.state;
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
          { (cart)
            ? (
              <Link className="payment" data-testid="checkout-products" to="/payment">
                finalizar compra
              </Link>
            )
            : (
              'finalizar compra'
            ) }
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
