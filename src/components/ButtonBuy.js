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
  testid: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonBuy;
