import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, event } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div>

        <div data-testid="product" className="product">
          <Link data-testid="product-detail-link" to={ `/product/${id}` }>
            <img alt="Products" src={ thumbnail } />
            <div>
              <h4>
                { title }
              </h4>
              <h5>{ price }</h5>
            </div>
          </Link>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => event(product) }
          >
            Adicionar ao Carrinho
          </button>
        </div>

      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  event: PropTypes.func.isRequired,
};
