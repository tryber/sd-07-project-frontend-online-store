import React, { Component } from 'react';

import ShoppingDetails from './ShoppingDetails';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };

    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    this.updateCart();
  }

  updateCart() {
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (arrayCarrinho !== null) {
      this.setState({ cartItems: arrayCarrinho });
    }
  }

  render() {
    const { cartItems } = this.state;

    if (!cartItems.length) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }

    return (
      <div>
        <div>
          {
            cartItems.map((item) => <ShoppingDetails key={ item.id } item={ item } />)
          }
        </div>
      </div>
    );
  }
}

export default Cart;
