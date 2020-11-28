
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
    const { shoppingList } = this.state;
    const variavel = shoppingList
      .filter(item => {
        const { id } = item;
        return id === idItem;
      })
    console.log(variavel);
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('cart'));

    if (list !== null) {
      this.setState(() => ({
        shoppingList: list ? list : [],
      }), console.log(this.state.shoppingList))
    }

  }

  shoppingCartMount() {
    const { shoppingList } = this.state;
    const { quantity } = this.state;
    if (shoppingList.length === 0) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>)
    }
    // Tudo abaixo daqui pressupõe que no state tem um array no formato shoppingList [{},{}] com chaves product e quantity
   //esse for está rodando só 1x, precisamos que ele retorne todos os outputs. 
    for (let index = 0; index < shoppingList.length; index += 1) {
      const { title, thumbnail, price, id } = shoppingList[index];
      console.log(22);
      return (
        <div key={id} className="cartItem">
          <div className='cartDescription' >
            <img className='thumbnail' alt="Product" src={thumbnail} />
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p>{price}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity[index]}</p>
          </div>
          <button data-testid='product-increase-quantity' onClick={() => { this.increaseDecrease(id, 'increase') }}>+</button>
          <button data-testid='product-decrease-quantity' onClick={() => { this.increaseDecrease(id, 'decrease') }}>-</button>
          <button>X</button>
        </div>
      ) 
    }
  }

  totalSum() {
    const { shoppingList, quantity } = this.state;
    let sum = 0;
    if (shoppingList.length !== 0) { 
      for(let index = 0; index<shoppingList.length; index+=1){
        const { price } = shoppingList[index];
        sum += price* quantity[index];
      }
    }
    return (
      <div>
        <h2>Total</h2>
        <h2>{sum}</h2>
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
