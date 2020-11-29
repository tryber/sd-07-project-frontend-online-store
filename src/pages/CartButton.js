import React from 'react';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  render() {
    const { product, datatestid, addItemToCart } = this.props;

    return (
      <button
        data-testid={ datatestid }
        type="button"
        onClick={ () => addItemToCart(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default CartButton;

CartButton.propTypes = {
  product: PropTypes.shape().isRequired,
  datatestid: PropTypes.string.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};
