import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as cartAPI from '../services/cartAPI';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    let freeShipping;
    if (product.shipping.free_shipping) {
      freeShipping = <span data-testid="free-shipping">Frete grátis!</span>;
    }
    if (!product.shipping.free_shipping) {
      freeShipping = <span />;
    }

    return (
      <div data-testid="product" className="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/product_Detail',
            search: `${product.title}`,
            state: { product },
          } }
        >
          <p>{product.title}</p>
          <img alt={ product.title } src={ product.thumbnail } />
          <p>{`R$ ${product.price}`}</p>
          {freeShipping}
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => cartAPI.addItem(product) }
        >
          Me adicione ao carrinho :)
        </button>
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
  Product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
}.isRequired;
