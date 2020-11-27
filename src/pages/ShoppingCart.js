import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ShoppingListItem from '../components/ShoppingListItem';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    if (!cart.length) {
      return (
        <div>
          <Header
            text="Carrinho de Compras"
            imagePath="images/shopping-cart-50.png"
            imagePathReply="images/reply-arrow-red-50.png"
          />
          <img
            src="images/empty-shopping-basket-red.png"
            alt="Carrinho de Compras"
          />
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>);
    }
    return (
      <div>
        <Header
          text="Carrinho de Compras"
          imagePath="images/shopping-cart-50.png"
          imagePathReply="images/reply-arrow-red-50.png"
        />
        <img
          src="images/empty-shopping-basket-red.png"
          alt="Carrinho de Compras"
        />
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <div>
          <ShoppingListItem />
        </div>
        <label>
          <input />
        </label>
        <button>Finalizar Compra</button>
        {
          cart.map((item) => (
            <CartItem key={ item.id } item={ item } />
          ))
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ShoppingCart;
