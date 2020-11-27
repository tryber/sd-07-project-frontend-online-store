import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../img/shopping-cart.png';
import goBackArrow from '../img/back-arrow.png';

export default class ShoppingCart extends Component {
  render() {
    const cartItem = localStorage.getItem('item');
    if (!cartItem) {
      return (
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow"/>
          </Link>
          <img src={ shoppingCartIcon } className="shopping-cart-icon-2" alt="shoppingCartImg"/>
          <span className="shopping-cart-text">Carrinho de Compras</span>
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        </div>
      )
    }
    else {
      return (
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow"/>
          </Link>
          <img src={ shoppingCartIcon } className="shopping-cart-icon-2" alt="shoppingCartImg"/>
          <span className="shopping-cart-text">Carrinho de Compras</span>
          <div>
            <p data-testid="shopping-cart-product-name">{cartItem}</p>
            <span data-testid="shopping-cart-product-quantity">Quantidade: 1</span>
          </div>
        </div>
      )
    }
  }
}
