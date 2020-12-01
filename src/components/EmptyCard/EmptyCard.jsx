import React, { Component } from 'react';
import * as cartStorage from '../../services/cartStorage';

class EmptyCart extends Component {
  constructor(props) {
    super(props);
    this.emptyCart = this.emptyCart.bind(this);
  }

  emptyCart() {
    cartStorage.emptyCart();
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.emptyCart }
        >
          Esvaziar o carrinho
        </button>
      </div>
    );
  }
}

export default EmptyCart;
