import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from './style';
import * as cp from '../index';

class CardProduct extends Component {
  constructor() {
    super();
    this.addProductCard = this.addProductCard.bind(this);
  }

  addProductCard() {
    const { id, price, thumbnail, title } = this.props;

    const product = {
      id: id,
      price: price,
      thumbnail: thumbnail,
      title: title,
    };
  }
  render() {

    const { id, price, thumbnail, title } = this.props;

    return (
      <css.cpnCenter data-testid="product">
        <h4>{title}</h4>
        <img src={thumbnail} alt="Product Image" />
        <p>{price}</p>
        <cp.Button data-testid="product-add-to-cart" className="button">
          Adicionar ao Carrinho
        </cp.Button>
        <a data-testid="product-detail-link">Detalhes</a>
      </css.cpnCenter>
    );
  }
}

CardProduct.propTypes = {

  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,

}

CardProduct.propDefault = {

  id: '',
  title: '',
  price: 0,
  thumbnail: '',

}

export default CardProduct;
