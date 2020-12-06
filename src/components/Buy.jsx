import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buy extends Component {
  render() {
    const {
      id, title, price, thumbnail, availableQuantity, addToCard, dataTestId,
    } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ () => addToCard(id, title, price, thumbnail, availableQuantity) }
      >
        Comprar
      </button>
    );
  }
}

Buy.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  addToCard: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Buy;
