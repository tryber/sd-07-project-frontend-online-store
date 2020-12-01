import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as FunctionsToCart from './FunctionsToCart';

class Produto extends React.Component {
  constructor(props) {
    super(props);

    this.handleStorageForDetails = this.handleStorageForDetails.bind(this);
  }

  handleStorageForDetails(product) {
    localStorage.setItem('productDetails', JSON.stringify(product));
  }

  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="imagem de um produto" />
        <span>{ price }</span>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => FunctionsToCart
            .addToCart(title, price, thumbnail) }
        >
          Adicionar ao seu carrinho
        </button>
        <button
          type="button"
          onClick={ () => this.handleStorageForDetails(product) }
        >
          <Link
            data-testid="product-detail-link"
            to="/detalhes"
          >
            Detalhes do produto
          </Link>
        </button>
      </div>
    );
  }
}

export default Produto;

Produto.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
