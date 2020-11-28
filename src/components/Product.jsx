import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class Product extends Component {
  constructor(props) {
    super(props);
    this.translateFreeShipping = this.translateFreeShipping.bind(this);
    this.renderShipping = this.renderShipping.bind(this);
  }

  translateFreeShipping(freeShipping) {
    let translatedFreeShipping = 'Não';
    if (freeShipping === true) translatedFreeShipping = 'Sim';
    return translatedFreeShipping;
  }

  renderShipping(freeShipping) {
    if (freeShipping === false) {
      return (
        <span
            data-testid="free-shipping"
          >
            Frete grátis: { this.translateFreeShipping(freeShipping) }
          </span>
      )
    }
    return (
      <span>
        Frete grátis: { this.translateFreeShipping(freeShipping) }
      </span>
    )
  }

  render() {
    const { id, title, price, thumbnail, freeShipping, availableQuantity, actualizeCart } = this.props;
    return (
      <div data-testid="product" id={ id }>
        <span>{ title }</span>
        <img src={ thumbnail } alt={ title } />
        <span
          available_quantity={ availableQuantity }
        >
          { price }
        </span>
        { this.renderShipping(freeShipping) }
        <button
          data-testid="product-add-to-cart"
          type="button"
          name={ id }
          onClick={ actualizeCart }
        >
          Adicionar ao carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ `/ProductDetail/${id}` }
        >
          Detalhes do produto
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  thumbnail: Proptypes.string.isRequired,
  freeShipping: Proptypes.bool.isRequired,
  availableQuantity: Proptypes.number.isRequired,
  actualizeCart: Proptypes.func.isRequired,
};

export default Product;
