import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addToCart from '../services/addToCart';

class Product extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, thumbnail, price, id, category, searchKey } = this.props;
    addToCart({ title, thumbnail, price, id, category, searchKey });
  }

  render() {
    const { title, thumbnail, price, id, category, searchKey } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="thumb" />
        <p>{price}</p>
        <Link
          data-testid="product-detail-link"
          to={ `./details/${category || 'no-defined-category'}/ ${
            searchKey || 'no-defined-searchKey'
          }/${id}` }
        >
          Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  searchKey: PropTypes.string.isRequired,
};

Product.defaultProps = {
  category: undefined,
};

export default Product;
