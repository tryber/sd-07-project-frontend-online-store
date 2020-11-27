import React, { Component } from 'react';
import CartItem from "../components/CartItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("cart")),
    };
  }

  render() {
    const { products } = this.state;
    if (products === null)
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    return products.map((product) => {
      return (
        <div key={product.id}>
          {
            <CartItem
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.imagePath}
              number={product.number}
            />
          }
        </div>
      );
    });
  }
}

export default ShoppingCart;
