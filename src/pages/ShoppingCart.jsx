import React, {Component} from 'react';
import * as api from '../services/api';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.productsList = this.productsList.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const cart = api.readCart();
    console.log(cart)
    this.setState({ cart });
  }

  emptyMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </p>
    );
  }

  productsList() {
    const { cart } = this.state;
    return (
      <div className="cart-products">
        { cart.map(({ thumbnail, qtd, title, price, id }) => (
          <div className="product" key={id}>
            <p
              className="product-title"
              data-testid="shopping-cart-product-name"
            >
              {title}
            </p>
          </div>
        ))}
      </div>
    );
    }
  render() {
    const { cart } = this.state;
    let cartItemsLength;
    if (cart) {
      cartItemsLength = this.state.cart.length;
    } else cartItemsLength = 0;
    
    if (cartItemsLength) {
      return (this.productsList())
    }
    return (
        this.emptyMessage()
    )
  }
}

