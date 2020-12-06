import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as cartAPI from '../services/cartAPI';

export default class QuantifyProducts extends Component {
  constructor(props) {
    super(props);
    this.setButtonState = this.setButtonState.bind(this);
    const { quantidade, id } = this.props;
    let buttonDisabled = false;
    if (cartAPI.returnItem(id).info.available_quantity === 1) {
      buttonDisabled = true;
    }
    this.state = {
      quantify: quantidade,
      buttonDisabled,
    };
  }

  componentDidUpdate() {
    const { id } = this.props;
    const { buttonDisabled } = this.state;
    if (
      cartAPI.returnItem(id).info.available_quantity === 1
      && buttonDisabled
    ) {
      this.setButtonState(true);
    } else if (
      !(cartAPI.returnItem(id).info.available_quantity === 1)
      && buttonDisabled
    ) {
      this.setButtonState(false);
    }
  }

  setButtonState(state) {
    this.setState({ buttonDisabled: state });
  }

  async increase(id) {
    const { quantify } = this.state;
    const { updateCartAmount } = this.props;
    cartAPI.increaseItem(id);
    console.log(cartAPI.returnItem(id).info.available_quantity);
    if (!(quantify === cartAPI.returnItem(id).info.available_quantity)) {
      this.setState({ quantify: quantify + 1 });
    }
    updateCartAmount();
  }

  async decrease(id) {
    const { quantify } = this.state;
    const { updateCartAmount } = this.props;
    cartAPI.decreaseItem(id);
    this.setState({ quantify: quantify - 1 });
    updateCartAmount();
  }

  render() {
    const { quantify, buttonDisabled } = this.state;
    const { id } = this.props;

    return (
      <div>
        <div>
          <button
            onClick={ () => this.increase(id) }
            type="button"
            data-testid="product-increase-quantity"
            disabled={ buttonDisabled }
          >
            +
          </button>
          <button
            onClick={ () => {
              this.decrease(id);
            } }
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>

          <button type="button">X</button>

          <div data-testid="shopping-cart-product-quantity">{quantify}</div>
        </div>
      </div>
    );
  }
}

QuantifyProducts.propTypes = {
  id: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  updateCartAmount: PropTypes.func.isRequired,
};
