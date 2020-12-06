import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as cartAPI from '../services/cartAPI';
import CartItem from '../components/CartItem';

class CartList extends React.Component {
  render() {
    const { updateCartAmount } = this.props;
    const itemsCart = cartAPI.getCart();
    const zeroItensCart = 0;
    return Object.keys(itemsCart).length === zeroItensCart ? (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    ) : (
      <div data-testid="item-cart">
        {Object.keys(itemsCart).map((id) => (
          <CartItem key={ id } id={ id } updateCartAmount={ updateCartAmount } />
        ))}
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default CartList;

CartList.propTypes = {
  updateCartAmount: PropTypes.func.isRequired,
};
