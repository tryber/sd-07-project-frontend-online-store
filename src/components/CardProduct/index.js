import React, { Component } from 'react';
import * as css from './style';
import * as cp from '../index';

class CardProduct extends Component {
  render() {
    const { id, price, productDetail, thumbnail, title } = this.props;
    return (
      <css.cpnCenter>
        <h4>{title}</h4>
        <img src={thumbnail} alt="Product Image" />
        <p>{price}</p>
        <cp.Button className="button">Adicionar ao Carrinho</cp.Button>
        <a>Detalhes</a>
      </css.cpnCenter>
    );
  }
}

export default CardProduct;
