import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartList extends React.Component {
  render() {
    const { product: { id, price, thumbnail, title } } = this.props;
    return (
      <div>
        <p>
          Código:
          {id}
        </p>
        <img src={ thumbnail } alt="Imagem do produto" />
        <p data-testid="shopping-cart-product-name">
          Produto:
          { title }
        </p>
        <p data-testid="shopping-cart-product-quantity">Quantidade: 1</p>
        <p>
          Valor:
          { price }
        </p>
      </div>
    );
  }
}

ShoppingCartList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShoppingCartList;
