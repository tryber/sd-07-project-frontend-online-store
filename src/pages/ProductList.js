import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as cartApi from '../services/api'

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
          <button data-testid="product-add-to-cart" onClick={() => cartApi.addToCart({ id, title, thumbnail, price }) }>Add to Cart</button>
          <Link to={ `/${id}` } data-testid="product-detail-link">
            <div className="card" data-testid="product">
              <h4>
                { title }
              </h4>
              <img src={ thumbnail } alt={ title } />
              <p>
                { price }
              </p>
            </div>
          </Link>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
