import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonBuy from './ButtonBuy';

class ProductCard extends Component {
  render() {
    const { products, addToCart, productsCart } = this.props;
    return (
      <div>
        {products.map((product) => {
          const { id, title, thumbnail, price } = product;
          return (
            <div
              key={ id }
              data-testid="product"
            >
              <h2>{ title }</h2>
              <Link
                to={ {
                  pathname: `/pages/productdetails/${id}`,
                  state: product,
                  addToCart,
                  productsCart,
                } }
              >
                <img src={ thumbnail } alt="products" data-testid="product-detail-link" />
              </Link>
              <p>{ price }</p>

              <ButtonBuy
                testid="product-add-to-cart"
                addToCart={ addToCart }
                product={ product }
              />
            </div>
          );
        })}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  productsCart: PropTypes.arrayOf.isRequired,
};

export default ProductCard;
