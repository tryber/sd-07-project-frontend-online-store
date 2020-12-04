import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as cartApi from '../services/localStorage';

class ProductList extends React.Component {
  render() {
    const { products, updateCartSize } = this.props;
    return (
      <div className="listCards">
        { products.map((product) => (
          <div key={ product.id } className="cards">
            <Link to={ `/${product.id}` } data-testid="product-detail-link">
              <div className="card" data-testid="product">
                <h4>
                  { product.title }
                </h4>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>
                  R$
                  { product.price }
                </p>
              </div>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => {
                cartApi.addToCart(product);
                updateCartSize();
              } }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCartSize: PropTypes.func.isRequired,
};

export default ProductList;
