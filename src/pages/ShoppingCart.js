import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    const products = [];
    const quantity = [];
    const initialNumber = 0;
    for (i = initialNumber; i < localStorage.length; i += 1) {
      products.push(localStorage.key(i));
      quantity.push(localStorage.getItem(localStorage.key(i)));
    }
    return (
      <div>
        { !localStorage.length
          ? <div data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </div>
          : (
            products.map((product, index) => (
              <div key={ product.id }>
                <div data-testid="shopping-cart-product-name">{product}</div>
                <div data-testid="shopping-cart-product-quantity">{quantity[index]}</div>
              </div>
            ))
          )}
      </div>
    );
  }
}

export default ShoppingCart;
