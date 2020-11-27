import React, { Component } from 'react';

class ShoppingCart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.renderProducts = this.renderProducts.bind(this);
  // }

  // renderProducts() {
  //   return (
  //     <div>
  //       <span data-testid="shopping-cart-product-name"></span>
  //       <p data-testid="shopping-cart-product-quantity"></p>
  //     </div>
  //   );
  // }

  render() {
    return (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
  }
}

export default ShoppingCart;
