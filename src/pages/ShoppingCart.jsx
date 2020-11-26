import React, { Component } from "react";
import CartItem from "../components/CartItem"

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
    };
  }
  
  render() {
    const { shoppingCartProps } = this.props.location;
    if (shoppingCartProps === undefined)
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    return (
      <div>
          {shoppingCartProps.map((product) => <CartItem
            key={product.title}
            title={product.title}
            price={product.price}
            image={product.imagePath} />
          )}
        </div>
      )
  }
}

export default ShoppingCart;
