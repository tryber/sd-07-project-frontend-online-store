import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>Detalhes do produto</Link>
      </div>
    );
  }
}

export default Product;
