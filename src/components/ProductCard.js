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
          const { id, title, thumbnail, price, shipping } = product;
          return (
            <div
              key={ id }
              data-testid="product"
            >
              <h2>{ title }</h2>
              <Link
                to={ {
                  pathname: `/pages/productdetails/${id}`,
                  product,
                  addToCart,
                  productsCart,
                } }
              >
                <img src={ thumbnail } alt="products" data-testid="product-detail-link" />
                {
                  shipping.free_shipping
                    ? <p data-testid="free-shipping">Frete Grátis</p> : false
                }
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
  addToCart: PropTypes.func.isRequired,
  productsCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
