import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.translateFreeShipping = this.translateFreeShipping.bind(this);
    this.renderShipping = this.renderShipping.bind(this);
    this.className = this.className.bind(this);
  }

  translateFreeShipping(freeShipping) {
    let translatedFreeShipping = ' Não';
    if (freeShipping === true) translatedFreeShipping = ' Sim';
    return translatedFreeShipping;
  }

  renderShipping(freeShipping) {
    if (freeShipping === false) {
      return (
        <span
          data-testid="free-shipping"
        >
          Frete grátis:
          { this.translateFreeShipping(freeShipping) }
        </span>
      );
    }
    return (
      <span>
        Frete grátis:
        { this.translateFreeShipping(freeShipping) }
      </span>
    );
  }

  className(id) {
    let className = 'item';
    const cartItens = JSON.parse(localStorage.getItem('cart'));
    if (cartItens !== null) {
      const isInCart = cartItens.some((item) => item.id === id);
      if (isInCart === true) className = 'item-selected';
    }
    return className;
  }

  render() {
    const {
      id,
      title,
      price,
      thumbnail,
      freeShipping,
      availableQuantity,
      actualizeCart
    } = this.props;
    return (
      <div className="container" data-testid="product" id={id}>
        <div className={ this.className(id) }>
          <span><strong>Descrição: { title }</strong></span>
          <br></br>
          <br></br>
          <img src={ thumbnail } alt={ title } />
          <span
            available_quantity={ availableQuantity }
          ></span>
          <h5>R$ { price }</h5>
          { this.renderShipping(freeShipping) }
          <button
            data-testid="product-add-to-cart"
            name={ id }
            onClick={ actualizeCart }
          >
            Adicionar ao carrinho
          </button>
          <br></br>
          <br></br>
          <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>
            Detalhes do produto
          </Link>
        </div>
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
