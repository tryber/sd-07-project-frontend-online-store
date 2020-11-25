import React, { Component } from 'react';

class EmptyShopCar extends Component {
  render() {
    return (
    <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
    </div>
    )
  }
}

export default EmptyShopCar;