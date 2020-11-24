import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt="Imagem do produto" />
        <h4>{title}</h4>
        <h3>{price}</h3>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
