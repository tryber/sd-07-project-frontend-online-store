import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../Components/ProductCart';

class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);

    this.increaseItem = this.increaseItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.totalPrice = this.totalPrice.bind(this);

    this.state = {
      shoppingCartItems: [],
    };
  }

  componentDidMount() {
    this.getProductsFromLocalStorage();
  }

  componentDidUpdate() {
    this.totalPrice();
  }

  getProductsFromLocalStorage() {
    const shoppingCartItems = JSON.parse(localStorage.getItem('shoppingCartItems'));
    this.setState({
      shoppingCartItems,
    });
  }

  increaseItem(id) {
    const { shoppingCartItems } = this.state;
    shoppingCartItems.find((item) => item.id === id)
      .quantity += 1;
    this.setState({
      shoppingCartItems,
    });
  }

  decreaseItem(id) {
    const zero = 0;
    const { shoppingCartItems } = this.state;
    const { quantity } = shoppingCartItems.find((item) => item.id === id);
    if (quantity > zero) {
      shoppingCartItems.find((item) => item.id === id)
        .quantity -= 1;
      this.setState({
        shoppingCartItems,
      });
    }
  }

  totalPrice() {
    const zero = 0;
    const decimals = 2;
    const { shoppingCartItems } = this.state;
    const sum = shoppingCartItems.reduce((acc, { price, quantity }) => (
      price * quantity + acc), zero);
    return sum.toFixed(decimals);
  }

  render() {
    const { shoppingCartItems } = this.state;
    if (!shoppingCartItems) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        <div>
          {shoppingCartItems.map((item) => (
            <ProductCart
              key={ item.id }
              product={ item }
              increaseItem={ this.increaseItem }
              decreaseItem={ this.decreaseItem }
            />
          ))}
        </div>
        <div>
          Valor Total da Compra R$
          {this.totalPrice()}
        </div>
        <Link data-testid="checkout-products" to="/checkout">
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCartPage;
