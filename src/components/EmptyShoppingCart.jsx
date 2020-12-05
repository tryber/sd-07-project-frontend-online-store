import React from 'react';

export default class EmptyProductList extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        <p>`Seu carrinho está vazio`</p>
      </div>
    );
  }
}
