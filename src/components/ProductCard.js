import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, updatecart } = this.props;
    const { thumbnail, title, price } = product;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/product', product, updatecart } }
        >
          <img src={ thumbnail } alt="Imagem do produto" />
          <h3>{ title }</h3>
          <h2>{ price }</h2>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => updatecart(product) }
          type="button"
        >
          Adicionar ao Carrinho
        </button>
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
  updatecart: Proptypes.func.isRequired,
};

export default ProductCard;
