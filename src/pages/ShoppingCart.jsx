import './ShoppingCart.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import CartItem from '../components/CartItem';

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
      products: JSON.parse(localStorage.getItem('cart')),
    };
  }

  removeLastItem(string) {
    let stringNumber = string;
    if (stringNumber[stringNumber.length - 1] === '0'
    || stringNumber[stringNumber.length - 1] === '.') {
      const index = 0;
      stringNumber = stringNumber.slice(index, (stringNumber.length - 1));
    }
    return stringNumber;
  }

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
  }

  roundNumber(string) {
    const roundNumber = 2;
    const stringNumber = string.toFixed(roundNumber);
    const number = this.removeZero(stringNumber);
    return number;
  }

  sumItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      cartArray.forEach((item) => {
        if (item.id === id) {
          if (item.number < item.availableQuantity) {
            item.number += 1;
            item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
          }
        }
      });
      localStorage.setItem('cart', JSON.stringify(cartArray));
      this.setState({ products: cartArray });
    }
  }

  subtractItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      cartArray.forEach((item) => {
        if (item.id === id) {
          const minimumNumber = 0;
          if (item.number > minimumNumber) {
            item.number -= 1;
            item.totalPrice = parseFloat(item.totalPrice) - parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
          }
        }
      });
      localStorage.setItem('cart', JSON.stringify(cartArray));
      this.setState({ products: cartArray });
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
      });
      localStorage.setItem('cart', JSON.stringify(cartArray));
      this.setState({ products: cartArray });
    }
  }

  render() {
    const { products } = this.state;
    const emptyCart = 0;
    if (products === null || products.length === emptyCart) {
      return (
        <div>
          <Link to="/">Retornar</Link>
          <h1 data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        </div>
      );
    }
    return (
      <div className="container">
        <Link to="/">Retornar</Link>
        <div className="items">
          {products.map((product) => (<CartItem
            key={ product.id }
            id={ product.id }
            title={ product.title }
            price={ product.totalPrice }
            image={ product.imagePath }
            number={ product.number }
            sumItem={ this.sumItem }
            subtractItem={ this.subtractItem }
            removeItem={ this.removeItem }
          />))}
        </div>
        <Link data-testid="checkout-products" to="/Checkout">Checkout</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: Proptypes.shape({
    key: Proptypes.number.isRequired,
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    image: Proptypes.string.isRequired,
    number: Proptypes.number.isRequired,
    sumItem: Proptypes.func.isRequired,
    subtractItem: Proptypes.func.isRequired,
    removeItem: Proptypes.func.isRequired,
  }).isRequired,
};


export default ShoppingCart;
