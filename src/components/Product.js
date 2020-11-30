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
    const { title,
      thumbnail,
      price,
      id,
      category,
      searchKey,
      availableQuantity } = this.props;
    addToCart({ title, thumbnail, price, id, category, searchKey, availableQuantity });
  }

  render() {
    const { title, thumbnail, price, id, category, searchKey, freeShipping } = this.props;
    return (
      <div data-testid="product">
        {freeShipping ? <p data-testid="free-shipping">envio grátis</p> : null}
        <h2>{title}</h2>
        <img src={ thumbnail } alt="thumb" />
        <p>{price}</p>
        <Link
          data-testid="product-detail-link"
          to={ `./details/${category || null}/${
            searchKey || null
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
  availableQuantity: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

Product.defaultProps = {
  category: undefined,
};

export default Product;
