import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import shoppingCartIcon from '../img/shopping-cart.png';
import goBackArrow from '../img/back-arrow.png';
import ItensOnCart from '../components/ItensOnCart';
import { readItensOnCart, saveItemOnCart, getPrice } from '../services/utils';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: readItensOnCart(),
    };
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleSubtractQuantity = this.handleSubtractQuantity.bind(this);
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
  }


  handleRemoveItem(productId) {
    const { cartItems } = this.state;
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    this.setState({ cartItems: newCartItems });
    saveItemOnCart(newCartItems);
  }

  handleSubtractQuantity(productId) {
    const itensOnCart = readItensOnCart();
    const index = itensOnCart.findIndex((item) => item.id === productId);
    const negativeIndex = -1;
    if (index > negativeIndex && itensOnCart[index].quantity > 1) {
      itensOnCart[index].quantity -= 1;
      saveItemOnCart(itensOnCart);
      this.setState({ cartItems: itensOnCart });
    } else {
      this.handleRemoveItem(productId);
      this.setState({ cartItems: itensOnCart });
    }
  }

  handleAddQuantity(productId) {
    const itensOnCart = readItensOnCart();
    const index = itensOnCart.findIndex((item) => item.id === productId);
    itensOnCart[index].quantity += 1;
    this.setState({ cartItems: itensOnCart });
    saveItemOnCart(itensOnCart);
  }

  render() {
    const { cartItems } = this.state;

    if (!cartItems) {
      return (
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow" />
          </Link>
          <img
            src={ shoppingCartIcon }
            className="icons shopping-cart-icon-2"
            alt="shoppingCartImg"
          />
          <span className="shopping-cart-text">Carrinho de Compras</span>
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        </div>
      );
    }
    return (
      <div className="shopping-cart-header">
        <div className="shopping-cart-wrapper">
          <Link className="display-flex" to="/">
            <img src={ goBackArrow } className="icons" alt="goBackArrow" />
          </Link>
          <div className="display-flex">
            <img
              src={ shoppingCartIcon }
              className="icons"
              alt="shoppingCartImg"
            />
            <span
              className=""
            >
              Carrinho de Compras
            </span>
          </div>

        </div>
        <div>
          {cartItems.map((product) => (<ItensOnCart
            key={ product.id }
            product={ product }
            handleAddQuantity={ this.handleAddQuantity }
            handleSubtractQuantity={ this.handleSubtractQuantity }
            handleRemoveItem={ this.handleRemoveItem }
          />))}
        </div>
        <div>
          <span>
            Valor Total da compra R$:
            { getPrice(cartItems) }
          </span>
          <button type="button" onClick={ () => this.checkoutSale }>
            Finalizar Compra
          </button>
        </div>
      </div>
    );
  }
}
