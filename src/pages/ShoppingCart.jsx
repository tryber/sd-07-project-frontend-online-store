import React, { Component } from 'react';
import CartItem from "../components/CartItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.sumItem = this.sumItem.bind(this);
    this.subtractItem = this.subtractItem.bind(this);
    this.state = {
      products: JSON.parse(localStorage.getItem("cart")),
    };
  }

  sumItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      cartArray.forEach(item => {
        if (item.id === id) {
          item.number += 1;
          // item.price = parseFloat(item.price) + parseFloat(item.price);
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
      let index = null;
      cartArray.forEach((item, itemIndex) => {
        if (item.id === id) {
          if (item.number > 0) item.number -= 1;
          if (item.number === 0) {
            index = itemIndex;
            cartArray.splice(index, 1);
          }
          // item.price = parseFloat(item.price) - parseFloat(item.price);
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
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    return (
      <div>
          {products.map((product) => <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.imagePath}
            number={product.number}
            sumItem={this.sumItem}
            subtractItem={this.subtractItem}
          />)}
      </div>
    );
  }
}

export default ShoppingCart;
