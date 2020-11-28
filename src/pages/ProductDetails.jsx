import React from 'react';
import PropTypes from 'prop-types';
import ProductDetailsEvaluation from '../components/ProductDetailsEvaluation';

class ProductDetails extends React.Component {
  render() {
    const { location: { product: { item } } } = this.props;
    // const { product } = location;
    // const { item } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{item.title}</h1>
        <ProductDetailsEvaluation />
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
