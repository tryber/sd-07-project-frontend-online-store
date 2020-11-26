import React, {Component} from 'react';
import * as api from '../services/api';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);

    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    this.setState({
      cart: Object.values(api.readCart())
    }, () => {
      console.log(this.state.cart)
    })
  }
  

  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }
  productsList() {
  const { cart }   = this.state;
  return (
    <div className="cart-products">
      { cart.map(({ thumbnail, qtd, title, price, id }) => (
        <div className="product" key={id}>
          <p className="product-title" data-testid="shopping-cart-product-name">{title}</p>
        </div>
      ))}
    </div>
  );
  }
  render() {
    const cartItemsLength = Object.keys(this.state.cart).length;
    if (cartItemsLength) {
      return (this.productsList())
    }
    return (
        this.emptyMessage()
      
    )
  }
}

