import React from 'react';
import * as localStorage from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.cartProducts = this.cartProducts.bind(this);

    this.state = {
      emptyCart: false,
    };
  }

  cartProducts() {
    const products = localStorage.picksUpItemsFromTheCartInLocalStorage();
    return (
      <div>
        {products.map((p) => (
          <div key={ p.id }>
            <div data-testid="shopping-cart-product-name">{ p.title }</div>
            <div data-testid="shopping-cart-product-quantity">{ p.quantity }</div>
            <div>{`${p.price * p.quantity}`}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { emptyCart } = this.state;
    return (
      <div>
        {emptyCart ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          this.cartProducts()
        )}
      </div>
    );
  }
}

export default ShoppingCart;
