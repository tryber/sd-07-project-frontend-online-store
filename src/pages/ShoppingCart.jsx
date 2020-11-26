import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { filter } from '../__mocks__/categories';

import './ShoppingCart.css';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: [
        {
          thumbnail: 'http://mlb-s1-p.mlstatic.com/835599-MLB26167839876_102017-I.jpg',
          qtd: 2,
          title: 'Pequeno Principe, O',
          price: 80.83,
          id: 'MLB923744806'
        },
        {
          thumbnail: 'http://mlb-s1-p.mlstatic.com/835599-MLB26167839876_102017-I.jpg',
          qtd: 3,
          title: 'Pequeno Principe, O',
          price: 80.83,
          id: 'MLB923744807'
        },
      ],
      totalPrice: 0,
    }

    this.productsList = this.productsList.bind(this);
    this.addSubButton = this.addSubButton.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }

  addSubButton(productId, operation) {
    const { cartProducts } = this.state;
    const index = cartProducts.findIndex(({ id }) => id === productId);
    if (operation === 'add') {
      cartProducts[index].qtd = cartProducts[index].qtd + 1;
    } else if (operation === 'sub' && cartProducts[index].qtd > 0) {
      cartProducts[index].qtd = cartProducts[index].qtd - 1;
    }

    this.setState({
      cartProducts: cartProducts,
    }, () => {
      this.totalPrice();
    }
    )

  }

  totalPrice() {
    const { cartProducts } = this.state
    const total = cartProducts.reduce((previous, { price, qtd }) => previous + price * qtd, 0);
    this.setState({
      totalPrice: total
    });
  }

  removeItem(productId) {
    let { cartProducts } = this.state;
    cartProducts = cartProducts.filter(({ id }) => id !== productId);
    this.setState({cartProducts: cartProducts});
  }

  componentDidMount() {
    this.totalPrice()
  }

  productsList() {
    const { cartProducts, totalPrice } = this.state;
    return (
      <div className="cart-products">
        { cartProducts.map(({ thumbnail, qtd, title, price, id }) => (
          <div className="product" key={id}>
            <button className="remove-product" onClick={() => this.removeItem(id)}>X</button>
            <img className="product-image" src={thumbnail} alt={title} />
            <p className="product-title" data-testid="shopping-cart-product-name">{title}</p>
            <button
              onClick={({ target }) => this.addSubButton(id, target.name)}
              className="sub-button"
              name="sub"
              data-testid="product-decreate-quantity"
            >
              -
            </button>
            <p className="product-qtd" data-testid="shopping-cart-product-quantity">{qtd}</p>
            <button
              onClick={({ target }) => this.addSubButton(id, target.name)}
              className="add-button"
              name="add"
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <p className="product-price">{price}</p>
          </div>
        ))}
        <p>Valor Total da Compra R$:{totalPrice}</p>
        <button>Finalizar Compra</button>
      </div>
    );
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        {cartProducts.length ? this.productsList() : this.emptyMessage()}
      </div>
    )
  }
}
