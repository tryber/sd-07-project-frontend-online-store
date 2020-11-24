import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCartButton from './ShoppingCartButton';
import ReturnButton from './ReturnButton';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <ReturnButton />
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
        <ShoppingCartButton />
      </div>
    );
  }
}

export default ShoppingCart;
