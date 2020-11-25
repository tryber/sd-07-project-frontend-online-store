import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/productList.css';

class ProductList extends Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (
      <Link to={ `/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h4>{title}</h4>
          <img src={ thumbnail } alt="Produto listado" />
          <p>{price}</p>
        </div>
      </Link>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductList;
