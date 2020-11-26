import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, category_id, id } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt="" />
        <h3>{price}</h3>
        <Link to={ `/product_details/${category_id}/${id}` }>
          <button type="button">VER DETALHES</button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default ProductCard;
