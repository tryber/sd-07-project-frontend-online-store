import React from 'react';

export default class ShoppingCart extends React.Component {
  render() {
    const { location: { state: product } } = this.props;
    return (
      <div
        data-testid="shopping-cart-empty-message"
      >
        <p>Seu carrinho está vazio</p>
        <p>{ product.title }</p>
      </div>
    );
  }
}
