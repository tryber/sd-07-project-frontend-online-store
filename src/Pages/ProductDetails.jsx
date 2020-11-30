import React from 'react';
import { useLocation } from 'react-router';
import ShoopingCartButton from '../Components/ShoppingCartButton';

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const { title, price, thumbnail, description } = product;

  const addItemToCart = (newTitle, newPrice) => {
    const newProduct = {
      title: newTitle,
      price: newPrice,
      quantity: 1,
    };
    if (localStorage.getItem('products') || []) {
      let localStorageArray = JSON.parse(localStorage.getItem('products'));
      if (localStorageArray === null) {
        localStorageArray = [];
      }
      if (localStorageArray !== []) {
        const existingProduct = localStorageArray
          .find((productArray) => productArray.title === title);
        if (existingProduct !== undefined) {
          existingProduct.quantity += 1;
        } else { localStorageArray.push(newProduct); }
      }
      return localStorage.setItem('products', JSON.stringify(localStorageArray));
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
        onClick={ () => addItemToCart(title, price) }
      >
        Adicionar ao carrinho
      </button>
    </div>);
};

export default ProductDetails;
