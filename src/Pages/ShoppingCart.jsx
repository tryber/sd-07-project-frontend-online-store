import React from 'react';
import ReturnButton from '../Components/ReturnButton';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.cartListOfItems = this.cartListOfItems.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(event) {
    const itemName = event.target.value;
    const localStorageArray = JSON.parse(localStorage.getItem('products'));
    if (localStorageArray !== null) {
      const findInLS = localStorageArray
        .find((productArray) => productArray.title === itemName);
      findInLS.quantity += 1;
      localStorage.setItem('products', JSON.stringify(localStorageArray));
    }
    this.setState({ counter: this.state.counter + 1 });
  }

  decreaseQuantity(event) {
    const itemName = event.target.value;
    const localStorageArray = JSON.parse(localStorage.getItem('products'));
    if (localStorageArray !== null) {
      const findInLS = localStorageArray
        .find((productArray) => productArray.title === itemName);
      findInLS.quantity -= 1;
      localStorage.setItem('products', JSON.stringify(localStorageArray));
    }
    this.setState({ counter: this.state.counter - 1 });

  }

  cartListOfItems() {
    const itemsLS = JSON.parse(localStorage.getItem('products'));
    return itemsLS.map((item) => {
      return (
        <div key={ item.title }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <p>{ (parseFloat(item.price)) }</p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.increaseQuantity }
            value={ item.title }
          >
            +
          </button>
          <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.decreaseQuantity }
            value={ item.title }
          >
            -
          </button>
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
