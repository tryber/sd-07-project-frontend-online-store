import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ShoopingCartButton from '../Components/ShoppingCartButton';
import AvaliationForms from '../Components/AvaliationForms';

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

  const [currentName, setCurrentName] = useState('');
  const onChangeName = (event) => {
    setCurrentName(event.target.value);
  };

  const [currentComment, setCurrentComment] = useState('');
  const onChangeComment = (event) => {
    setCurrentComment(event.target.value);
  };

  const [comments, setComment] = useState([]);
  const submitComment = (event) => {
    event.preventDefault();
    setComment([...comments, { name: currentName, comment: currentComment }]);
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

      <AvaliationForms
        onChangeName={ onChangeName }
        onChangeComment={ onChangeComment }
        submitComment={ submitComment }
      />

      <ul className="comment-session">
        { comments.map((element) => {
          const { name, comment } = element;
          return (
            <li key={ `${name}-comment` }>
              <span>
                Nome:
                { name }
              </span>
              <p>
                { comment }
              </p>
            </li>
          );
        }) }
      </ul>
    </div>);
};

export default ProductDetails;
