import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <div className="ctn-title">
          <h4 className="text">{title}</h4>
        </div>
        <img src={thumbnail} alt="Product Image" />
        <p>{price}</p>
        <cp.Button data-testid="product-add-to-cart" className="button">
          Adicionar ao Carrinho
        </cp.Button>
        <Link className="links" to="/details" data-testid="product-detail-link">
          Detalhes
        </Link>
      </css.cpnCenter>
    );
  }
}

CardProduct.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};

CardProduct.propDefault = {
  id: '',
  title: '',
  price: 0,
  thumbnail: '',
};

export default CardProduct;
