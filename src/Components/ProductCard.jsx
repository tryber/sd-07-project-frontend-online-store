import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(title, price) {
    const newProduct = {
      title,
      price,
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
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <section>
        <Link
          to={ {
            pathname: '/product',
            state: { product },
          } }
          data-testid="product-detail-link"
          product={ product }
        >
          <div>
            <h1>{ title }</h1>
            <div>{ price }</div>
            <img src={ thumbnail } alt="exemplar do produto" />
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => this.addItemToCart(title, price) }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.array }.isRequired;

export default ProductCard;
