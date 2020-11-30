import React from 'react';
import PropTypes from 'prop-types';

class Informations extends React.Component {
  constructor() {
    super();
    this.AddQuantity = this.AddQuantity.bind(this);
    this.SubQuantity = this.SubQuantity.bind(this);
  }

  AddQuantity(e) {
    const one = 1;
    const quanty = e.target.parentNode.childNodes[3].innerHTML;
    const newQuanty = Number(quanty) + one;
    e.target.parentNode.childNodes[3].innerHTML = newQuanty;
  }

  SubQuantity(e) {
    const one = 1;
    const quanty = e.target.parentNode.childNodes[3].innerHTML;
    let newQuanty = Number(quanty) - one;
    const number = 0;
    if (newQuanty <= number) {
      newQuanty = number;
    }
    e.target.parentNode.childNodes[3].innerHTML = newQuanty;
  }


  render() {
    const { product: { id, title, price, quantity, thumbnail } } = this.props;
    return (
      <div>
        <p>{id}</p>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <img src={ thumbnail } alt="imagem do produto" />
        <button
          data-testid="product-increase-quantity"
          onClick={ this.AddQuantity }
          type="button"
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          onClick={ this.SubQuantity }
          type="button"
        >
          -
        </button>
      </div>
    );
  }
}

Informations.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default Informations;
