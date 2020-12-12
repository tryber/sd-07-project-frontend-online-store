import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  increment() {
    const { quantity } = this.state;
    const { availableQuantity } = this.props;
    if (quantity === availableQuantity) return;
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
    const cartQuantity = Number(localStorage.getItem('items_cart')) + 1;
    localStorage.setItem('items_cart', cartQuantity);
  }

  decrement() {
    this.setState((prevState) => ({
      quantity: Math.max(prevState.quantity - 1, 1),
    }));
    const cartQuantity = Number(localStorage.getItem('items_cart')) - 1;
    localStorage.setItem('items_cart', cartQuantity);
  }

  render() {
    const { quantity } = this.state;
    return (
      <main>
        <div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            className="btn"
            onClick={ this.increment }
          >
            +
          </button>
        </div>
        <en>{ quantity }</en>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            className="btn"
            onClick={ this.decrement }
          >
            -
          </button>
        </div>
      </main>
    );
  }
}

Quantity.propTypes = { availableQuantity: PropTypes.string.isRequired };

export default Quantity;
