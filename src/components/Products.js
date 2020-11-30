import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddShoppingCart from './ButtonAddShoppingCart';

class Products extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <p>{ product.title }</p>
        <img src={ product.thumbnail } alt="Ilustração do produto" />
        <p>
          R$
          { product.price }
        </p>
        <Link to={ { pathname: '/ShoppingCartPage/Details', product } }>
          <button type="button" data-testid="product-detail-link">Details</button>
        </Link>
        <ButtonAddShoppingCart productSelected={ product } />
      </div>
    );
  }
}

Products.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Products;
