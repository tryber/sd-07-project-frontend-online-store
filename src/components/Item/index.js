import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import Button from '../Button';

class Item extends Component {
  constructor(props) {
    super(props);

    this.onClickComprar = this.onClickComprar.bind(this);
  }

  onClickComprar() {
    const { id, title, thumbnail, price } = this.props.item;
    const pattern = {
      id,
      title,
      thumbnail,
      price,
      total: price,
      quantity: 1,
    }

    const stringCarrinho = localStorage.getItem('carrinho');
    const arrayCarrinho = JSON.parse(stringCarrinho);

    if (!stringCarrinho) {
      localStorage.setItem('carrinho', JSON.stringify([pattern]));
    } else {

      const product = arrayCarrinho.find(item => id === item.id);

      if (product) {
        product.quantity += 1;
        product.total = product.quantity * product.price;
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
      } else {
        arrayCarrinho.push(pattern);
        localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
      }
    }
    this.props.modifyCart()
  }

  render() {
    const { id, title, thumbnail, price, shipping } = this.props.item;
    const shortItem = {
      id,
      title,
      thumbnail,
      price,
      quantity: 1,
      total: price,
    }


    return (
      <div className="item" data-testid="product">
        <p>{title}</p>
        <img className="img-item" src={thumbnail} alt={title} />
        <p>R${price}</p>
        { shipping.free_shipping && <p data-testid="free-shipping">Free</p> }
        <button data-testid="product-add-to-cart" onClick={this.onClickComprar}>Adicionar</button>
        <Button
          as={Link}
          to={{
            pathname: '/detail',
            state: shortItem
          }}
          data-testid="product-detail-link">
          Detalhes
        </Button>
      </div>
    );
  }
}

export default Item;
