import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, title, price, thumbnail, actualizeCart } = this.props;
    return (
      <div data-testid="product" id={ id }>
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <button
          data-testid="product-add-to-cart"
          type="button"
          name={ id }
          onClick={ actualizeCart }
        >
          Adicionar ao carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ `/ProductDetail/${id}` }
        >
          Detalhes do produto
        </Link>
      </div>
    );
  }
}

export default Product;
