import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  render() {
    const { handleTotalQuantity, cart } = this.props;
    if (!Object.keys(cart).length) {
      return (
        <div>
          <Header
            text="Carrinho de Compras"
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
          imagePathReply="images/reply-arrow-red-50.png"
        />
        {
          cart.map((item) => (
            <CartItem
              key={ item.id }
              item={ item }
              handleTotalQuantity={ handleTotalQuantity }
            />
          ))
        }
        <Link
          to="/checkout"
          cart={ cart }
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleTotalQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
