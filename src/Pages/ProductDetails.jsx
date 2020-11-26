import React from 'react';
import { useLocation } from 'react-router';

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;
  const { title, price, thumbnail, description } = product;
  return (
    <div>
      <h1 data-testid="product-detail-name">{ title }</h1>
      <img src={ thumbnail } alt={ title } />
      <span>{ price }</span>
      <section><p>{description}</p></section>
    </div>);
}

export default ProductDetails;
