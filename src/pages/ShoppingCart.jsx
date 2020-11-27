import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.removeLastItem = this.removeLastItem.bind(this);
    this.removeZero = this.removeZero.bind(this);
    this.roundNumber = this.roundNumber.bind(this);
    this.sumItem = this.sumItem.bind(this);
    this.subtractItem = this.subtractItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      products: JSON.parse(localStorage.getItem("cart")),
    };
  }

  removeLastItem(string) {
    let stringNumber = string;
    if (stringNumber[stringNumber.length - 1] === '0' || stringNumber[stringNumber.length - 1] === '.') {
      stringNumber = stringNumber.slice(0, (stringNumber.length - 1));
    }
    return stringNumber;
  };

  removeZero(string) {
    let stringNumber = string;
    if (stringNumber[0] === '0') {
      stringNumber = '0';
      return stringNumber;
    }
    stringNumber = this.removeLastItem(stringNumber);
    stringNumber = this.removeLastItem(stringNumber);
    stringNumber = this.removeLastItem(stringNumber);
    return stringNumber;
  };

  roundNumber(string) {
    let stringNumber = string.toFixed(2);
    const number = this.removeZero(stringNumber);
    return number;
  };

  sumItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      cartArray.forEach(item => {
        if (item.id === id) {
          item.number += 1;
          item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
          item.totalPrice = this.roundNumber(item.totalPrice);
        } 
      })
      localStorage.setItem('cart', JSON.stringify(cartArray))
      this.setState({ products: cartArray })
    }
  }

  subtractItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      cartArray.forEach((item, itemIndex) => {
        if (item.id === id) {
          if (item.number > 0) {
            item.number -= 1;
            item.totalPrice = parseFloat(item.totalPrice) - parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
          }
        } 
      })
      localStorage.setItem('cart', JSON.stringify(cartArray))
      this.setState({ products: cartArray })
    }
  }

  removeItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      let index = null;
      cartArray.forEach((item, itemIndex) => {
        if (item.id === id) {
          index = itemIndex;
          cartArray.splice(index, 1);
        } 
      })
      localStorage.setItem('cart', JSON.stringify(cartArray))
      this.setState({ products: cartArray })
    }
  }

  render() {
    const { products } = this.state;
    if (products === null || products.length === 0)
      return (
        <div>
          <Link to="/">Retornar</Link>
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        </div>
      );
    return (
      <div>
        <Link to="/">Retornar</Link>
          {products.map((product) => <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.totalPrice}
            image={product.imagePath}
            number={product.number}
            sumItem={this.sumItem}
            subtractItem={this.subtractItem}
            removeItem={this.removeItem}
          />)}
        <Link data-testid="checkout-products" to="/Checkout">Checkout</Link>
      </div>
    );
  }
}

export default ShoppingCart;
