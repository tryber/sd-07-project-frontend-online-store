import React from 'react';
import { Link } from 'react-router-dom';
import cart from './img/shopping.png';


class ShoppingCartIcon extends React.Component {
  constructor() {
    super();
    this.atualizar = this.atualizar.bind(this);
    this.state = {
      numeroItens: 2,
    };
  }

  async atualizar(cartTotal) {
    await this.setState({ numeroItens: cartTotal });
  }

  render() {
    const { numeroItens } = this.state;
    const len = [];
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const summ = (sum, addValue) => sum + (addValue.qtd);
    const cartTotal = cartItems.reduce(summ, len.length);
    if (numeroItens < cartTotal) {
      this.atualizar(cartTotal);
    }
    return (
      <Link className="a" to="/shoppingcart" data-testid="shopping-cart-button">
        <img className="shopping" src={ cart } alt="Shopping Cart" />
        <p className="cartsize" data-testid="shopping-cart-size">{numeroItens}</p>
      </Link>
    );
  }
}

export default ShoppingCartIcon;
