import React, { Component } from 'react';
import * as localStorageFunctions from '../services/utils';


class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: '',
    };

    this.getProductsFromLocalStorage = this.getProductsFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  getProductsFromLocalStorage() {
    const products = localStorageFunctions.getFromLocalStorage();
    this.setState({
      cartProducts: products,
    });
  }

  render() {
    const { cartProducts } = this.state;
    if (!cartProducts.length) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">
          { cartProducts[0].title }
        </h1>
        <p data-testid="shopping-cart-product-quantity"> 1 </p>
      </div>
    );
  }
}

export default ShoppingCart;
