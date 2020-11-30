import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { prod: { id, title, price, thumbnail }, addCart } = this.props;
    const { prod } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{ price }</p>
        <Link data-testid="product-detail-link" to={ `/productdetails/${id}` }>
          VER DETALHES
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addCart(prod) }
        >
          ADICIONAR
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
};
export default ProductCard;
