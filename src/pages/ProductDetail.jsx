import React from 'react';
import PropTypes from 'prop-types';

export default class ProductDetail extends React.Component {
  render() {
    const { location: { state: product } } = this.props;
    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{ product.title }</h1>
          <img src={ product.thumbnail } alt={ product.title } />
        </div>
        <div>
          <p>{`Preço: $ ${product.price}`}</p>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
