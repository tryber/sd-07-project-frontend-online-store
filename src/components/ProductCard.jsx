import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {

  getCard(title, thumbnail, price) {
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="product" />
        <span>{price}</span>
      </div>
    )
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ id, title, thumbnail, price }) => (
          <Link
            key={ id }
            data-testid="product-detail-link"
            to={ {
              pathname: `/details/${id}`, id, title, thumbnail, price
            } }
          >
            {this.getCard(title, thumbnail, price)}
          </Link>
        ))}
      </div>
    );
  }
}
ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductCard;
