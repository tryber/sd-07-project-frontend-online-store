import React, { Component } from 'react';

import * as cartAPI from '../services/cartAPI';

export default class QuantifyProducts extends Component {
  constructor() {
    super();

    this.state = {
      quantify: 1,
    };
  }

  componentDidMount() {
    const cart = cartAPI.getCart();
    const { id } = this.props;
    this.setState({ quantify: cart[id].quantidade });
  }

  async increase(id) {
    const { quantify } = this.state;
    cartAPI.increaseItem(id);
    this.setState({ quantify: quantify + 1 });
  }

  async decrease(id) {
    const { quantify } = this.state;
    cartAPI.decreaseItem(id);
    if (quantify > 1) {
      this.setState({ quantify: quantify - 1 });
    }
  }
  render() {
    const { quantify } = this.state;
    const { id } = this.props;

    return (
      <div>
        <div>
          <button
            onClick={() => this.increase(id)}
            type="button"
            data-testid="product-increase-quantity"
          >
            +
          </button>
          <button
            onClick={() => {
              this.decrease(id);
            }}
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>

          <button type="button">X</button>

          <div data-testid="shopping-cart-product-quantity">Quantidade: {quantify}</div>
        </div>
      </div>
    );
  }
}
