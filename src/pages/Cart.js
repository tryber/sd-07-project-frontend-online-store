import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import * as api from '../services/api';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cartItems: [],
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    // console.log(cart);
    if (cart !== undefined && cart !== [] && cart !== null) {
      cart.forEach(async ({ id: idCartItem, category, searchKey, quantity }) => {
        const resp = await api.getProductsFromCategoryAndQuery(category, searchKey);
        const {
          title,
          thumbnail,
          price,
          id,
        } = resp.results.find((product) => product.id === idCartItem);
        this.setState((previus) => ({
          cartItems: [...previus.cartItems, { title, thumbnail, price, id, quantity }],
          loading: false,
        }));
      });
    }
  }

  render() {
    const { loading, cartItems } = this.state;
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === undefined || cart === [] || cart === null) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    if (loading) {
      return (
        <div>
          Carregando...
        </div>
      );
    }

    return (
      <div>
        {cartItems.map(({ title, thumbnail, price, id, quantity }) => (
          <CartItem
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            id={ id }
            key={ id }
            quantity={ quantity }
          />
        ))}
      </div>
    );
  }
}
