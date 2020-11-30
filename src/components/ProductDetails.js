import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import ProductSpec from './ProductSpec';
import * as localStorageFunctions from '../services/utils';
import ProductEvaluationForm from './ProductEvaluationForm';

class ProductDetails extends Component {
  constructor() {
    super();

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    localStorageFunctions.saveProductIntoShoppingCart(product);
  }

  render() {
    const { location } = this.props;
    const {
      thumbnail,
      title,
      price,
      attributes,
      shipping: { free_shipping: freeSheeping } } = location.product;

    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/carrinho"
        >
          Carrinho
        </Link>
        <div>
          <h2 data-testid="product-detail-name">
            { ` O produto ${title} possui o preço ${price}`}
          </h2>
          <img src={ thumbnail } alt="imagem do produto" />
          { freeSheeping && <span data-testid="free-shipping">Frete Grátis</span> }
        </div>
        <div>
          <h3>Especificações Técnicas</h3>
          {attributes.map((attribute) => (
            <ProductSpec key={ attribute.id } spec={ attribute } />
          ))}
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addToCart(location.product) }
        >
          Adicionar ao Carrinho
        </button>
        <ProductEvaluationForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: Proptypes.shape({
    product: Proptypes.shape({
      attributes: Proptypes.arrayOf(Proptypes.object).isRequired,
      thumbnail: Proptypes.string.isRequired,
      title: Proptypes.string.isRequired,
      price: Proptypes.number.isRequired,
      shipping: Proptypes.shape({
        free_shipping: Proptypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
