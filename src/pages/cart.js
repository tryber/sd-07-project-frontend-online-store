import React from 'react';
import box from '../images/box.png';
import '../App.css';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      title: ' ',
      thumbnail: ' ',
      price: 0,
    };
  }

  render() {
    const { title, thumbnail, price } = this.state;
    const totalPrice = 0;
    const quantity = 1;
    console.log(this.state);
    if (!title) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <img
            className="btBox"
            src={ box }
            alt="Caixa Vazia"
          />
        </div>
      );
    }
    return (
      <div>
        <ul>
          <li>
            <span>{ thumbnail }</span>
            <spam data-testid="shopping-cart-product-name">{ title }</spam>
            <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
            <span>{ price }</span>
          </li>
          <li>
            { totalPrice }
          </li>
        </ul>
      </div>
    );
  }
}

export default Cart;
