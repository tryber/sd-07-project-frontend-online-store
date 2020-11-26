import React from 'react';
import PropTypes from 'prop-types';

class Itens extends React.Component {
  render() {
    const { itens: { title, thumbnail, price, qtt } } = this.props;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${qtt}`}
        </span>
        <span>{`Preço: ${price}`}</span>
      </div>
    );
  }
}

Itens.propTypes = {
  itens: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qtt: PropTypes.number.isRequired,
  }).isRequired,
};

export default Itens;
