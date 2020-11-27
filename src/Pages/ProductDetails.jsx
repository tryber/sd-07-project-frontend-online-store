import React from 'react';
import { useLocation } from 'react-router';
import ShoopingCartButton from '../Components/ShoppingCartButton';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const { title, price, thumbnail, description } = product;
  const addProductToCart = (productt) => {
    if (localStorage.getItem(productt)) {
      const quantity = JSON.parse(localStorage.getItem(productt)) + 1;
      localStorage.setItem(productt, quantity);
    } else {
      localStorage.setItem(productt, 1);
    }
  };
  return (
    <div>
      <ShoopingCartButton data-testid="shopping-cart-button" />
      <h1 data-testid="product-detail-name">{ title }</h1>
      <img src={ thumbnail } alt={ title } />
      <span>{ price }</span>
      <section><p>{description}</p></section>
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => addProductToCart(title) }
      >
        Adicionar ao carrinho
      </button>
    </div>);
};

export default ProductDetails;
