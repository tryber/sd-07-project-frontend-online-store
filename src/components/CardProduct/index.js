import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as util from '../../services/utilities';
import PropTypes from 'prop-types';
import * as css from './style';
import * as cp from '../index';

class CardProduct extends Component {
  constructor(props) {
    super(props);

    const { id, price, title, thumbnail } = this.props.product;
    const { amount } = this.props;
    this.addProductCart = this.addProductCart.bind(this);
    this.saveCurrentProductDetails = this.saveCurrentProductDetails.bind(this);

    this.state = {
      product: {
        id,
        price,
        thumbnail,
        title,
        amount,
      },
    };
  }

  addProductCart() {
    const { addToCart } = this.props;
    addToCart(this.state.product);
  }

  saveCurrentProductDetails() {
    const { product } = this.state;
    util.setObjStorage('currentProductDetail', product);
  }

  render() {
    const { price, thumbnail, title } = this.props.product;

    return (
      <css.cpnCenter data-testid="product">
        <div className="ctn-title">
          <h4 className="text">{title}</h4>
        </div>

        <img src={thumbnail} alt="Product Image" />
        <p>{price}</p>
        <cp.Button
          getEvent={this.addProductCart}
          data-testid="product-add-to-cart"
          className="button"
        >
          Adicionar ao Carrinho
        </cp.Button>

        <Link
          data-testid="product-detail-link"
          className="links"
          to={{ pathname: '/details', detailsProduct: this.state.product }}
          data-testid="product-detail-link"
          onClick={this.saveCurrentProductDetails}
        >
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
