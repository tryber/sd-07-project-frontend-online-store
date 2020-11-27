import React, { Component } from 'react';
import * as localStorageFunctions from '../services/utils';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: '',
    };
    this.getProductsFromLocalStorage = this.getProductsFromLocalStorage.bind(this);
    this.decreaseFunc = this.decreaseFunc.bind(this);
    this.increaseFunc = this.increaseFunc.bind(this);
  }

  async componentDidMount() {
    await this.getProductsFromLocalStorage();
    const { cartProducts } = this.state;
    if (!cartProducts.length) return this.state;
    cartProducts.forEach((itemCart) => {
      this.setState({ [itemCart.id]: 1 });
    });
  }

  getProductsFromLocalStorage() {
    const products = localStorageFunctions.picksUpItemsFromTheCartInLocalStorage();
    this.setState({
      cartProducts: products,
    });
  }

  increaseFunc(id) {
    this.setState((previousState) => ({
      [id]: previousState[id] + 1,
    }));
  }

  decreaseFunc(id) {
    const numberOne = 0;
    this.setState((previousState) => ({
      [id]: previousState[id] - 1 === numberOne ? previousState[id]
        : previousState[id] - 1,
    }));
  }

  render() {
    const { cartProducts } = this.state;
    if (!cartProducts.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return cartProducts.map(({ id, title }) => {
      const result = Object.entries(this.state).find((element) => element[0] === id);
      return (
        <div key={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p data-testid="shopping-cart-product-quantity" id={ id }>
            { result === undefined ? '' : result[1] }
          </p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.increaseFunc(id) }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.decreaseFunc(id) }
          >
            -
          </button>
        </div>
      );
    });
  }
}

export default ShoppingCart;
