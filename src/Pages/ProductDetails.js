import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: product } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <h4 data-testid="product-detail-name">{`${title}`}</h4>
        <img src={ thumbnail } alt="Imagem" />
        <h4>{`R$ ${price}`}</h4>
        <p>Especificação</p>
      </div>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
