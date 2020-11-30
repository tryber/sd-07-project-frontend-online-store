
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
    }
  }

  increaseDecrease(idItem, action) {
    const { quantity } = this.state;
    const shoppingList = JSON.parse(localStorage.getItem('cart'));
    // const quantity = localStorage.getItem('quantity');
    console.log(quantity);
    const variavel = shoppingList
      .find(item => {
        const { id } = item;
        return id === idItem;
      })
    const index = shoppingList.indexOf(variavel);
    console.log(variavel);
    if (action === 'increase') {
      quantity[index] += 1;
      this.setState({
        quantity,
      }, localStorage.setItem('quantity',(quantity)))
    } else if (action === 'decrease') {
      quantity[index] -= 1;
      if (quantity[index] < 0) quantity[index] = 0;
      this.setState({
        quantity,
      }, localStorage.setItem('quantity',quantity))
    } else if (action === 'remove') {
      quantity.splice(index, 1);
      shoppingList.splice(index,1);
      this.setState({
        shoppingList,
        quantity,
      }, localStorage.setItem('quantity',quantity), localStorage.setItem('cart', JSON.stringify(shoppingList)))
    }
  }
  createQuantity() {
    console.log('passou aqui')
    const shoppingList = JSON.parse(localStorage.getItem('cart'));
    console.log(shoppingList);
    const quantity = [];
    for (let index = 0; index < shoppingList.length; index += 1) {
      quantity.push(1);
    }
    console.log(quantity);
    this.setState({
      quantity,
    })
  }
  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('cart'));
    // const quantity = localStorage.getItem('quantity');

    if (list !== null) {
      this.setState(() => ({
        shoppingList: list ? list : [],
        // quantity,
      }), this.createQuantity())
    }

  }


  shoppingCartMount() {
    const shoppingList = JSON.parse(localStorage.getItem('cart'));
    // const { shoppingList } = this.state;

    const { quantity } = this.state;
    const array = [];
    if (shoppingList.length === 0) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>)
    }
    for (let index = 0; index < shoppingList.length; index += 1) {
      const { title, thumbnail, price, id } = shoppingList[index];
      array.push(
        <div key={id} className="cartItem">
          <div className='cartDescription' >
            <img className='thumbnail' alt="Product" src={thumbnail} />
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p>{price}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity[index]}</p>
          </div>
          <button data-testid='product-increase-quantity' onClick={() => { this.increaseDecrease(id, 'increase') }}>+</button>
          <button data-testid='product-decrease-quantity' onClick={() => { this.increaseDecrease(id, 'decrease') }}>-</button>
          <button onClick={() => { this.increaseDecrease(id, 'remove') }}>X</button>
        </div>
      )
    }
    return (array)
  }

  totalSum() {
    const { shoppingList, quantity } = this.state;
    let sum = 0;
    if (shoppingList.length !== 0) {
      for (let index = 0; index < shoppingList.length; index += 1) {
        const { price } = shoppingList[index];
        sum += price * quantity[index];
      }
    }
    return (
      <div>
        <h2>Total</h2>
        <h2>{sum.toFixed(2)}</h2>
      </div>
    )

  }

  // async fetchProductsById(id) {
  //   const result = await getProductsFromCategoryAndQuery(
  //     undefined,
  //     undefined,
  //     id,
  //   );
  //   return result[0] ? result[0].body : result.results[0]
  // }

  render() {
    return (
      <div className="shoppingCartBody">
        <h1>Shopping Cart</h1>
        <this.shoppingCartMount />
        <this.totalSum />
      </div>
    )
  }
}
export default shoppingCart;
