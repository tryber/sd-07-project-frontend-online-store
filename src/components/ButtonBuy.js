import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonBuy extends Component {
  render() {
    const { addToCart, product, testid } = this.props;
    return (
      <div>
        <button
          data-testid={ testid }
          type="button"
          onClick={ () => addToCart(product) }
        >
          COMPRAR
        </button>
      </div>
    );
  }
}

ButtonBuy.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.arrayOf.isRequired,
  testid: PropTypes.string.isRequired,
};

export default ButtonBuy;
