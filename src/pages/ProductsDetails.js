import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        { product.title }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;