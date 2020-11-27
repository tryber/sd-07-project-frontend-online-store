import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as localStorageFunctions from '../services/utils';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: '',
      totalPrice: 0,
    };
    this.getProductsFromLocalStorage = this.getProductsFromLocalStorage.bind(this);
    this.findaProductWithId = this.findaProductWithId.bind(this);
    this.decreaseFunc = this.decreaseFunc.bind(this);
    this.increaseFunc = this.increaseFunc.bind(this);
  }

  async componentDidMount() {
    await this.getProductsFromLocalStorage();
    const { cartProducts } = this.state;
    if (!cartProducts.length) return this.state;
    cartProducts.forEach((itemCart) => {
      this.setState((previousState) => ({
        [itemCart.id]: 1,
        totalPrice: previousState.totalPrice + itemCart.price,
      }));
    });
  }

  getProductsFromLocalStorage() {
    const products = localStorageFunctions.picksUpItemsFromTheCartInLocalStorage();
    this.setState({
      cartProducts: products,
    });
  }

  findaProductWithId(id) {
    const { cartProducts } = this.state;
    const product = cartProducts.find((product) => product.id === id);
    return product;
  }

  increaseFunc(id) {
    const { price } = this.findaProductWithId(id);
    this.setState((previousState) => ({
      [id]: previousState[id] + 1,
      totalPrice: previousState.totalPrice + price,
    }));
  }

  decreaseFunc(id) {
    const { price } = this.findaProductWithId(id);
    const numberOne = 0;
    this.setState((previousState) => ({
      [id]: previousState[id] - 1 === numberOne ? previousState[id]
        : previousState[id] - 1,
      totalPrice: previousState[id] - 1 === numberOne ? previousState.totalPrice
        : previousState.totalPrice - price,
    }));
  }

  render() {
    const { cartProducts, totalPrice } = this.state;
    if (!cartProducts.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        {
          cartProducts.map(({ id, title }) => {
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
          })
        }
        <Link
          data-testid="checkout-products"
          to={ { pathname: '/checkout', totalPrice } }
        >
          Finalizar Compra
        </Link>
      </div>
    )
  }
}

export default ShoppingCart;
