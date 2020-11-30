import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CartItem from '../components/CartItem';
import * as api from '../services/api';
import updateCartItemInLocalStorage from '../services/updateCartItem';
import removeCartItemInLocalStorage from '../services/removeCartItem';


export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      loading: true,
      cartItems: [],
      redirect: false,
      isEmpty: true,
    };
  }

  componentDidMount() {
    this.updateCartItems();
  }

  updateCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart !== undefined && cart !== [] && cart !== null) {
      cart.forEach(async ({ id: idCartItem, category, searchKey, quantity, availableQuantity }) => {
        const resp = await api.getProductsFromCategoryAndQuery(category, searchKey);
        const { title, thumbnail, price, id } = resp.results.find(
          (product) => product.id === idCartItem,
        );
        this.setState((previus) => ({
          cartItems: [...previus.cartItems, { title, thumbnail, price, id, quantity, availableQuantity }],
          isEmpty: false,
        }));
      });
    }
    this.setState({
      loading: false,
    });
  }

  updateQuantity({ id: idUpdating, quantity: newQuantity }) {
    const { cartItems } = this.state;
    const itemIndex = cartItems.findIndex(({ id }) => id === idUpdating);
    const {
      title,
      thumbnail,
      price,
      availableQuantity,
    } = cartItems[itemIndex];
    cartItems[itemIndex] = {
      id: idUpdating,
      quantity: newQuantity,
      title,
      thumbnail,
      price,
      availableQuantity,
    };
    this.setState({ cartItems });
    updateCartItemInLocalStorage(cartItems[itemIndex]);
  }

  removeItem(idRemoving) {
    const { cartItems } = this.state;
    const newCartItems = cartItems.filter(({ id }) => id !== idRemoving);
    this.setState({ cartItems: newCartItems });
    removeCartItemInLocalStorage(idRemoving);
  }

  render() {
    const { loading, cartItems, isEmpty } = this.state;
    if (loading) {
      return (
        <div>
          Carregando...
        </div>
      );
    }

    if (isEmpty) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    const { redirect } = this.state;
    return (
      <div>
        {cartItems.map(({ title, thumbnail, price, id, quantity, availableQuantity }) => (
          <CartItem
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            id={ id }
            key={ id }
            quantity={ quantity }
            availableQuantity={ availableQuantity }
            updateQuantity={ this.updateQuantity }
            removeItem={ this.removeItem }
          />
        ))}
        <div>
          <button
            data-testid="checkout-products"
            type="button"
            onClick={ () => {
              this.setState({ redirect: true });
            } }
          >
            Finalizar compras
          </button>
          {redirect && <Redirect to="/checkout" />}
        </div>
      </div>
    );
  }
}
