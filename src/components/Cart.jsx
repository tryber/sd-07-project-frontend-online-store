import React, { Component } from 'react';
import remove from './img/remove.png';
import add from './img/add-circle.png';
import removeitem from './img/remove-from-basket.png';

class Cart extends Component {
  sumCart() {
  let cartitems = JSON.parse(localStorage.getItem('cartItems'));
  let sumcart = 0;
  cartitems.map((sum) => sumcart+(sum.qtd * sum.price));
  return sumcart;
  }
  render () {
    const cartitems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      cartitems.map((item) => <div>
        <img src={removeitem} alt="Remover item" />
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.title}</p>
        <img src={remove} alt="retirar" />
        <p>{item.qtd}</p>
        <img src={add} alt="adicionar" />
        <p>{(item.qtd * item.price)}</p>
      </div>
      ))}
}

export default Cart;