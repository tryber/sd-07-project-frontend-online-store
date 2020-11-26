import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location } = this.props;
    const { product } = location;
    const { item } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{item.title}</h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
