import React from 'react';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  constructor() {
    super();
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart({ target }) {
    sessionStorage.setItem('item', target.value);
  }

  render() {
    const { productName } = this.props;
    return (
      <button type="button" value={ productName } onClick={ this.addItemToCart }>
        Adicionar ao carrinho
      </button>
    );
  }
}

export default CartButton;

CartButton.propTypes = {
  productName: PropTypes.string.isRequired,
};
