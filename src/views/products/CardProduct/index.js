import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as util from '../../../services/utilities';
import * as css from './style';
import * as cpForms from '../../../components/forms';

class CardProduct extends Component {
  constructor(props) {
    super(props);

    const { product } = this.props;
    const { id, price, title, thumbnail } = product;
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
    const { product } = this.state;
    addToCart(product);
  }

  saveCurrentProductDetails() {
    const { product } = this.state;
    util.setObjStorage('currentProductDetail', product);
  }

  render() {
    const { product } = this.state;
    const { price, thumbnail, title } = product;

    return (
      <css.cpnCenter data-testid="product">
        <div className="ctn-title">
          <h4 className="text">{title}</h4>
        </div>
        <img src={ thumbnail } alt="Product" />
        <p>{price}</p>
        <cpForms.Button
          getEvent={ this.addProductCart }
          data-testid="product-add-to-cart"
          className="button"
        >
          Adicionar ao Carrinho
        </cpForms.Button>

        <Link
          data-testid="product-detail-link"
          className="links"
          to={ { pathname: '/details', detailsProduct: product } }
          onClick={ this.saveCurrentProductDetails }
        >
          Detalhes
        </Link>
      </css.cpnCenter>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
  amount: PropTypes.number,
  addToCart: PropTypes.func,
};

CardProduct.defaultProps = {
  product: {
    id: '',
    title: '',
    price: 0,
    thumbnail: '',
  },
  amount: 0,
  addToCart: () => {},
};

export default CardProduct;
