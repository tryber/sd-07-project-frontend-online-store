import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price, shipping } = product;
    return (
      <div data-testid="product" className="productCard">
        <p>{ title }</p>
        <img src={ thumbnail } alt="product" />
        {/* <p>{`R$ ${price.toFixed(2)}`}</p> */}
        <p>{`R$ ${price.toFixed()}`}</p>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/product/${id}`,
            details: { product },
          } }
        >
          Ver Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <FreeShipping shipping={ shipping.free_shipping } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.bool,
  }).isRequired,
};

export default ProductCard;
