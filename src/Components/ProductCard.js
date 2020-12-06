import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    console.log(product)
    const { title, id, price, thumbnail, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div data-testid="product" className="product-card">
        <div>
          <Link to={ { pathname: `/product-details/${id}`, state: product } }>
            <h4 data-testid="product-detail-link">{ title }</h4>
          </Link>
        </div>
        <img src={ thumbnail } alt={ id } />
        <p>
          R$
          { price }
        </p>
        { freeShipping ? <div data-testid="free-shipping"><div className="free-shipping"/>Frete Grátis</div> : null }
        <AddToCartButton
          product={ product }
          dataTestId="product-add-to-cart"
          className="btn-add-to-cart"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
