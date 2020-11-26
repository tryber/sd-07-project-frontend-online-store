import React from 'react';
import PropTypes from 'prop-types';
import { ShoppingCartList } from '../../components';

class ShoppingCart extends React.Component {
  render() {
    let { location: { purchasedProducts } } = this.props;
    if (purchasedProducts === undefined) {
      purchasedProducts = [];
    }

    if (purchasedProducts.length) {
      return (
        <div data-testid="shopping-cart-empty-message">
          {purchasedProducts.map((item) => (<ShoppingCartList
            key={ item.id }
            product={ item }
          />))}
        </div>
      );
    }
    return (
      <div data-testid="shopping-cart-empty-message">
        <span>Seu carrinho está vazio</span>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    purchasedProducts: PropTypes.array.isRequired,
  }).isRequired,
};

export default ShoppingCart;
