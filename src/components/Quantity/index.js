import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { increaseCartQuantity } from '../../services/localStorageService';
import './style.css';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

  }

  increment() {
    const { availableQuantity, cartQuantity } = this.props;
    if (cartQuantity === availableQuantity) return;
    const cartNumber = Number(localStorage.getItem('items_cart')) + 1;
  }

  decrement() {
    const cartQuantity = Number(localStorage.getItem('items_cart')) - 1;
    localStorage.setItem('items_cart', cartQuantity);
  }

  render() {
    const { cartQuantity } = this.props;
    return (
      <main>
        <div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            className="btn"
            onClick={this.increment}
          >
            +
          </button>
        </div>
        <en>{cartQuantity}</en>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            className="btn"
            onClick={this.decrement}
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
