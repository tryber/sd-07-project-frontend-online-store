import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;
    return (
      <div data-testid="product" className="productCard">
        <p>{title}</p>
        <img src={thumbnail} alt="product" />
        <p>{`R$ ${price.toFixed(2)}`}</p>
        <Link data-testid="product-detail-link"
          to={{
            pathname: `/product/${id}`,
            details: { product },
          }}
        >
          Ver Detalhes
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default ProductCard;
