import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class Product extends Component {

  render() {
    const { id, title, price, thumbnail, actualizeCart } = this.props;
    return (
      <div data-testid="product" id={id}>
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <button
          data-testid="product-add-to-cart"
          name={id}
          onClick={actualizeCart}>Adicionar ao carrinho</button>
        <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>Detalhes do produto</Link>
      </div>
    );
  }
}

Product.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  thumbnail: Proptypes.string.isRequired,
  actualizeCart: Proptypes.func.isRequired,
};

export default Product;
