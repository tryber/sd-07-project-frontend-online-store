import React from 'react';
import PropTypes from 'prop-types';
import ReturnButton from '../Components/ReturnButton';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ReturnButton path="/" />
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
