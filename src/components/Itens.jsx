import React from 'react';
import PropTypes from 'prop-types';

class Itens extends React.Component {
  render() {
    const { itens: { title, thumbnail, price, qtt } } = this.props;
    return (
      <div>
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-quantity">
          {`Quantidade: ${qtt}`}
        </span>
        <span>{price}</span>
      </div>
    );
  }
}

Itens.defaultProps = {
  itensStorage: [],
};

Itens.propTypes = {
  itensStorage: PropTypes.arrayOf(PropTypes.object),
};

export default Itens;
