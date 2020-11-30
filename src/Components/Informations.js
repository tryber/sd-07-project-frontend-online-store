import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Informations extends React.Component {
  constructor() {
    super();
    this.AddQuantity = this.AddQuantity.bind(this);
    this.SubQuantity = this.SubQuantity.bind(this);
  }

  AddQuantity(e) {
    const one = 1;
    const quanty = e.target.parentNode.childNodes[2].innerHTML;
    const newQuanty = Number(quanty) + one;
    e.target.parentNode.childNodes[2].innerHTML = newQuanty;
  }

  SubQuantity(e) {
    const one = 1;
    const quanty = e.target.parentNode.childNodes[2].innerHTML;
    let newQuanty = Number(quanty) - one;
    const number = 0;
    if (newQuanty <= number) {
      newQuanty = number;
    }
    e.target.parentNode.childNodes[2].innerHTML = newQuanty;
  }

  render() {
    const {
      product: { title, price, quantity, thumbnail },
    } = this.props;
    return (
      <div className="card-cart">
        <img
          className="card-cart-image"
          src={ thumbnail }
          alt="imagem do produto"
        />
        <div>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{price}</p>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            data-testid="product-increase-quantity"
            className="button-product"
            onClick={ this.AddQuantity }
            type="button"
          >
            +
          </button>
          <button
            className="button-product"
            data-testid="product-decrease-quantity"
            onClick={ this.SubQuantity }
            type="button"
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

Informations.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default Informations;
