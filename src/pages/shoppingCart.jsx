import React from 'react';
import * as localStorage from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.cartProducts = this.cartProducts.bind(this);
  }
  //victor rocha
  cartProducts() {
    const products = localStorage.picksUpItemsFromTheCartInLocalStorage();
    return (
      <div>
        {products.length ? (
          products.map((p) => (
            <div key={ p.id }>
              <div data-testid="shopping-cart-product-name">{p.title}</div>
              <div data-testid="shopping-cart-product-quantity">
                {p.quantity}
              </div>
              <div>{`${p.price * p.quantity}`}</div>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }

  render() {
    return <div>{this.cartProducts()}</div>;
  }
}

export default ShoppingCart;
