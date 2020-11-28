
import React, { Component } from 'react';
import ShowCartItems from '../components/ShowCartItems';
import { getCartItems } from '../services/localStorageHandler';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
    this.retrieveItemsFromStorage = this.retrieveItemsFromStorage.bind(this);
  }

  componentDidMount() {
    this.retrieveItemsFromStorage();
  }

  retrieveItemsFromStorage() {
    const retrievedItems = getCartItems();
    this.setState({
      cartItems: retrievedItems,
    });
  }

  render() {
    const { cartItems } = this.state;
    if (!cartItems || !cartItems.length) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }

    return (
      <div>
        {cartItems.map((item) => (
          <ShowCartItems
            key={ item.id }
            item={ {
              title: item.title,
              price: item.price,
              quantity: item.initialQuantity,
            } }
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
