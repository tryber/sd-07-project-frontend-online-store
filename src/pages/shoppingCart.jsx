import React from 'react';
import * as localStorage from '../services/localStorage'

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.cartProducts = this.cartProducts.bind(this);

    this.state = {
      emptyCart: true,
      products: '',
    }
  }

  cartProducts() {
    
  }

  render() {
    const { emptyCart } = this.state;
    return <div>{emptyCart ? 
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> :
    this.cartProducts()}</div>;
  }
}

export default ShoppingCart;
