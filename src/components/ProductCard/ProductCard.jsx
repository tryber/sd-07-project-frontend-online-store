import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddShoppingCart from '../AddShoppingCart/AddShoppingCart'

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const categoryId = product.category_id;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt="" />
        <h3>{price}</h3>
        <Link to={ `/product_details/${categoryId}/${id}` }>
          <button data-testid="product-detail-link" type="button">VER DETALHES</button>
        </Link>
        <AddShoppingCart product = { product } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
