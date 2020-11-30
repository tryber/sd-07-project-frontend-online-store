
import React, { Component } from 'react';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class shoppingCart extends Component {
  constructor(props) {
    super(props);
    this.shoppingCartMount = this.shoppingCartMount.bind(this);
    this.increaseDecrease = this.increaseDecrease.bind(this);
    this.totalSum = this.totalSum.bind(this);
    this.state = {
      shoppingList: [],
      quantity: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    };
  }

  componentDidMount() {
    this.insideMount();
  }

  insideMount() {
    const list = JSON.parse(localStorage.getItem('cart'));
    // const quantity = localStorage.getItem('quantity');

    if (list !== null) {
      this.setState(() => ({
        shoppingList: list,
        // quantity,
      }), this.createQuantity());
    }
  }

  createQuantity() {
    console.log('passou aqui');
    const shoppingList = JSON.parse(localStorage.getItem('cart'));
    console.log(shoppingList);
    const quantity = [];
    for (let index = 0; index < shoppingList.length; index += 1) {
      quantity.push(1);
    }
    console.log(quantity);
    this.setState({
      quantity,
    });
  }

  increaseDecrease(idItem, action) {
    const { quantity } = this.state;
    const shoppingList = JSON.parse(localStorage.getItem('cart'));
    // const quantity = localStorage.getItem('quantity');
    console.log(quantity);
    const variavel = shoppingList
      .find((item) => {
        const { id } = item;
        return id === idItem;
      });
    const index = shoppingList.indexOf(variavel);
    console.log(variavel);
    if (action === 'increase') {
      quantity[index] += 1;
      this.setState({
        quantity,
      }, localStorage.setItem('quantity', (quantity)));
    } else if (action === 'decrease') {
      quantity[index] -= 1;
      const zero = 0;
      if (quantity[index] < zero) quantity[index] = zero;
      this.setState({
        quantity,
      }, localStorage.setItem('quantity', quantity));
    } else if (action === 'remove') {
      quantity.splice(index, 1);
      shoppingList.splice(index, 1);
      this.setState({
        shoppingList,
        quantity,
      },
      localStorage.setItem('quantity', quantity),
      localStorage.setItem('cart', JSON.stringify(shoppingList)));
    }
  }

  shoppingCartMount() {
    const shoppingList = JSON.parse(localStorage.getItem('cart'));
    // const { shoppingList } = this.state;

    const { quantity } = this.state;
    const array = [];
    const zero = 0;
    if (shoppingList.length === zero) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>);
    }
    for (let index = 0; index < shoppingList.length; index += 1) {
      const { title, thumbnail, price, id } = shoppingList[index];
      array.push(
        <div key={ id } className="cartItem">
          <div className="cartDescription">
            <img className="thumbnail" alt="Product" src={ thumbnail } />
            <p data-testid="shopping-cart-product-name">{ title }</p>
            <p>{ price }</p>
            <p data-testid="shopping-cart-product-quantity">{ quantity[index] }</p>
          </div>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => { this.increaseDecrease(id, 'increase'); } }
          >
            +
          </button>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => { this.increaseDecrease(id, 'decrease'); } }
          >
            -
          </button>
          <button
            type="button"
            onClick={ () => { this.increaseDecrease(id, 'remove'); } }
          >
            X
          </button>
        </div>,
      );
    }
    return (array);
  }

  totalSum() {
    const { shoppingList, quantity } = this.state;
    let sum = 0;
    const dois = 2;
    const zero = 0;
    if (shoppingList.length !== zero) {
      for (let index = 0; index < shoppingList.length; index += 1) {
        const { price } = shoppingList[index];
        sum += price * quantity[index];
      }
    }
    return (
      <div>
        <h2>Total</h2>
        <h2>{sum.toFixed(dois)}</h2>
      </div>
    );
  }

  render() {
    return (
      <div className="shoppingCartBody">
        <h1>Shopping Cart</h1>
        <this.shoppingCartMount />
        <this.totalSum />
      </div>
    );
  }
}
export default shoppingCart;
