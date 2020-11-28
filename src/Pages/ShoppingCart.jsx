import React from 'react';
import ReturnButton from '../Components/ReturnButton';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.cartListOfItems = this.cartListOfItems.bind(this);
  }

  cartListOfItems() {
    const itemsLS = JSON.parse(localStorage.getItem('products'));
    return itemsLS.map((item) => {
      return (
        <div key={ item.title }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <p>
            Valor:
            { (parseFloat(item.price)) }
          </p>
          <p data-testid="shopping-cart-product-quantity">Quantidade: { item.quantity }</p>
        </div>
      );
    });

  }

  render() {
    return (
      <div>
        <ReturnButton path="/" />
        {localStorage.length < 1 ? (
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        ) : (
          this.cartListOfItems()
        )}
        <p>Valor total:</p>
        <div></div>
      </div>
    );
  }
}

export default ShoppingCart;
