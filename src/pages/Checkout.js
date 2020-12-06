import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ShoppingCardListBuy } from '../components';
import BuyerInformation from '../components/BuyerInformation';

class Checkout extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { productsInShoppingCart } = state;
    return (
      <div>
        <ShoppingCardListBuy products={ productsInShoppingCart } />
        <BuyerInformation />
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productsInShoppingCart: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Checkout;
