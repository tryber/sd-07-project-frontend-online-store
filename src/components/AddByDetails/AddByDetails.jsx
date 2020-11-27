import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddByDetails extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
        >
          {product}
        </button>
      </div>
    );
  }
}

AddByDetails.prototype = {
  product: PropTypes.string.isRequired,
};

export default AddByDetails;
