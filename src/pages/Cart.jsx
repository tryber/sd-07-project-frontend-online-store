import React from "react";

class Cart extends React.Component {
  render() {
    const { cartProduct } = this.props.location.state;
    if (!cartProduct) return <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>;
    
    return (
      <div>
        <span data-testid="shopping-cart-product-name">{cartProduct}</span>
        <p>Quantidade:<span data-testid="shopping-cart-product-quantity">1</span></p>
      </div>
    );
  }
}

export default Cart;
