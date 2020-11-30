import React from 'react';
import ReturnButton from '../Components/ReturnButton';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      items: JSON.parse(localStorage.getItem('products')),
      totalPrice: 0,
    };

    this.cartListOfItems = this.cartListOfItems.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.sumAllPrices = this.sumAllPrices.bind(this);
  }

  componentDidMount() {
    this.sumAllPrices();
  }

  increaseQuantity(event) {
    const itemName = event.target.value;
    const { items, counter } = this.state;
    if (items !== null) {
      const findInLS = items
        .find((productArray) => productArray.title === itemName);
      findInLS.quantity += 1;
      localStorage.setItem('products', JSON.stringify(items));
    }
    this.setState({ counter: counter + 1 });
    this.sumAllPrices();
  }

  decreaseQuantity(event) {
    const itemName = event.target.value;
    const { items, counter } = this.state;
    if (items !== null) {
      const findInLS = items
        .find((productArray) => productArray.title === itemName);
      if (findInLS.quantity >= 1) {
        findInLS.quantity -= 1;
        localStorage.setItem('products', JSON.stringify(items));
      }
    }
    this.setState({ counter: counter - 1 });
    this.sumAllPrices();
  }

  cartListOfItems() {
    const { items } = this.state;
    if (items) {
      return items.map((item) => (
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
      ));
    }
  }

  sumAllPrices() {
    const { items } = this.state;
    if (items) {
      items.reduce((prevPrice, currentItem) => {
        const valuePerItem = currentItem.price * currentItem.quantity;
        const totalValue = prevPrice + valuePerItem;
        this.setState({ totalPrice: totalValue });
        return totalValue;
      }, null);
    }
  }

  render() {
    const { totalPrice } = this.state;
    return (
      <div>
        <ReturnButton path="/" />
        {localStorage.length < 1 ? (
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        ) : (
          this.cartListOfItems()
        )}
        <p>Valor total:</p>
        <div>{ totalPrice }</div>
      </div>
    );
  }
}

export default ShoppingCart;
