import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';
import Button from '../Button';

class Item extends Component {
  constructor() {
    super();

    this.onClickComprar = this.onClickComprar.bind(this);
  }

  onClickComprar() {
    const { modifyCart, item } = this.props;
    const { id, title, thumbnail, price, available_quantity } = item;

    const pattern = {
      id,
      title,
      thumbnail,
      price,
      total: price,
      quantity: 1,
      available_quantity
    };

    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (!stringCarrinho) {
      localStorage.setItem('carrinho', JSON.stringify([pattern]));
    } else {
      const product = arrayCarrinho.find((carrinhoItem) => id === carrinhoItem.id);

      if (product) {
        if(product.quantity < product.available_quantity) product.quantity += 1;
        product.total = product.quantity * product.price;
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
      } else {
        arrayCarrinho.push(pattern);
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
      }
    }
    modifyCart();
  }

  render() {
    const { item: { id, title, thumbnail, price, shipping } } = this.props;

    const shortItem = {
      id,
      title,
      thumbnail,
      price,
      quantity: 1,
      total: price,
    };

    return (
      <div className="item" data-testid="product">
        <p>{title}</p>
        <img className="img-item" src={ thumbnail } alt={ title } />
        <p>
          { `R$ ${price}` }
        </p>
        {
          shipping.free_shipping && <p data-testid="free-shipping">Free</p>
        }
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.onClickComprar }
        >
          Adicionar
        </button>
        <Button
          as={ Link }
          to={ {
            pathname: '/detail',
            state: shortItem,
          } }
          data-testid="product-detail-link"
        >
          Detalhes
        </Button>
      </div>
    );
  }
}

Item.propTypes = {
  modifyCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.object.isRequired,
  }).isRequired,
};

export default Item;
