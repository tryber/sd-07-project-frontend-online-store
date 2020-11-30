import React from 'react';
import PropTypes from 'prop-types';

class Informations extends React.Component {
  render() {
    const { product: { id, title, price, quantity, thumbnail } } = this.props;
    return (
      <div>
        <p>{id}</p>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <img src={ thumbnail } alt="imagem do produto" />
      </div>
    );
  }
}

Informations.propTypes = {
  product: PropTypes.objectOf.isRequired,
};

export default Informations;
