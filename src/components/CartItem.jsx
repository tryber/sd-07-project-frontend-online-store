import './CartItem.css';
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.showItem = this.showItem.bind(this);
    this.showSimpleItem = this.showSimpleItem.bind(this);
  }

  showItem() {
    const {
      id,
      title,
      price,
      image,
      number,
      sumItem,
      subtractItem,
      removeItem,
    } = this.props;
    return (
      <div className="container">
        <span data-testid="shopping-cart-product-name"> Descrição: <strong> { title } </strong></span>
        <img src={ image } alt={ title } />
        <span> <strong>R$ { price } </strong></span>
        <br></br>
        <div className="btns">
          <button
            data-testid="product-decrease-quantity"
            name={ id }
            onClick={ subtractItem }>-</button>
          <span data-testid="shopping-cart-product-quantity"> { number } </span>
          <button
            data-testid="product-increase-quantity"
            name={ id }
            onClick={ sumItem }>+</button>
          <br></br>
          <button
            name={ id }
            onClick={ removeItem }>X</button>
        </div>
      </div>
    );
  }

  showSimpleItem() {
    const { title, price, image, number } = this.props;
    return (
      <div className="containerSimple">
        <img src={image} alt={title} />
        <span data-testid="shopping-cart-product-name">Descrição: {title} - </span>
        <span data-testid="shopping-cart-product-quantity"> Qtd: {number} - </span>
        <span> R$ {price}</span>
      </div>
    );
  }


  render() {
    const { sumItem } = this.props;
    if (sumItem) {
      return this.showItem();
    }
    return this.showSimpleItem();
  }
}

CartItem.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  image: Proptypes.string.isRequired,
  number: Proptypes.number.isRequired,
  sumItem: Proptypes.func.isRequired,
  subtractItem: Proptypes.func.isRequired,
  removeItem: Proptypes.func.isRequired,
};

export default CartItem;
