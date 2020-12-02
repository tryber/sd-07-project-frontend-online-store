import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

function ShoppingDetails({ item, modifyCart }) {
  const { title, price, id } = item;

  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);

  const { pathname: page } = window.location;

  const changeQuantity = ({ target: { value } }) => {
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    const product = arrayCarrinho.find(item => item.id === id);

    if (value === '+') {
      product.quantity += 1;
      product.total = product.quantity * product.price;
      setQuantity(quantity + 1);
      setTotal(product.quantity * product.price);
    } else if (product.quantity > 1) {
      product.quantity -= 1;
      product.total = product.quantity * product.price;
      setQuantity(quantity - 1);
      setTotal(product.quantity * product.price);
    }

    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
  };

  const addToCart = () => {
    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (!stringCarrinho) {
      localStorage.setItem('carrinho', JSON.stringify([item]));
      modifyCart()
    } else {
      const product = arrayCarrinho.find(item => id === item.id);

      if (product) {
        product.quantity += 1
        product.total = product.quantity * product.price
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
        modifyCart()
      } else {
        arrayCarrinho.push(item);
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
        modifyCart()
      }
    }
  }

  const increaseButton = (
    <input
      value='+'
      type='button'
      data-testid="product-increase-quantity"
      onClick={changeQuantity} />
  );
  const decreaseButton = (
    <input value='-'
      type='button'
      data-testid="product-decrease-quantity"
      onClick={changeQuantity} />
  );

  const addToCartButton = (
    <button onClick={addToCart} data-testid="product-detail-add-to-cart">
      Adicionar
    </button>
  );

  return (
    <Wrapper>
      <div data-testid="shopping-cart-product-name">{title}</div>

      {page === '/cart' && decreaseButton}

      <div data-testid="shopping-cart-product-quantity">{quantity}</div>

      {page === '/cart' && increaseButton}

      <div data-testid="shopping-cart-product-price">R$ {price}</div>
      <div>R$ {total.toFixed(2)}</div>

      {page !== '/cart' && addToCartButton}
    </Wrapper>
  );
}

ShoppingDetails.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingDetails;
