import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="Imagem do produto" />
        <h3>{ title }</h3>
        <h2>{ price }</h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: Proptypes.shape({
    thumbnail: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
