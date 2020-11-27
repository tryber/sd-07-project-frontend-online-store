import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(product) {
    if (localStorage.getItem(product)) {
      const quantity = JSON.parse(localStorage.getItem(product)) + 1;
      localStorage.setItem(product, quantity);
    } else {
      localStorage.setItem(product, 1);
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
          onClick={ () => this.addItemToCart(title) }
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
