import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Total extends Component {
  render() {
    const { productsInShoppingCart } = this.props;
    const decimals = 2;
    const startSum = 0;
    return (
      <div>
        <span>Valor Total da Compra: R$ </span>
        <span>
          {productsInShoppingCart
            .reduce((sum, { quantity, price }) => (sum + quantity * price), startSum)
            .toFixed(decimals)}
        </span>
      </div>
    );
  }
}

Total.propTypes = {
  productsInShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Total;
