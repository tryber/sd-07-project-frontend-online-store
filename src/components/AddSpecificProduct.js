import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddSpecificProduct extends Component {
  render() {
    const { addShoppingCartItems } = this.props;

    return (
      <button
        type="button"
        onClick={ addShoppingCartItems }
        data-testid="product-add-to-cart"
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddSpecificProduct.propTypes = {
  addShoppingCartItems: PropTypes.func.isRequired,
};

export default AddSpecificProduct;
