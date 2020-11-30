import React from 'react';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
<<<<<<< HEAD
  render() {
    const { product, datatestid, addItemToCart } = this.props;

=======
  constructor() {
    super();
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart({ target }) {
    localStorage.setItem('item', target.value);
  }

  render() {
    const { productName, datatestid } = this.props;
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
    return (
      <button
        data-testid={ datatestid }
        type="button"
<<<<<<< HEAD
        onClick={ () => addItemToCart(product) }
=======
        value={ productName }
        onClick={ this.addItemToCart }
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

export default CartButton;

CartButton.propTypes = {
<<<<<<< HEAD
  product: PropTypes.shape().isRequired,
  datatestid: PropTypes.string.isRequired,
  addItemToCart: PropTypes.func.isRequired,
=======
  productName: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
};
