import React from 'react';

import PropTypes from 'prop-types';

class ShowCartItems extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div data-testid="shopping-cart-product-name">
          {item.title}
        </div>
        <div>
          {item.price}
        </div>
        <div data-testid="shopping-cart-product-quantity">
          {item.quantity}
        </div>
      </div>
    );
  }
}

ShowCartItems.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowCartItems;
