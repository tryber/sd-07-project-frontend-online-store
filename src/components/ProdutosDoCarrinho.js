import React from 'react';
import PropTypes from 'prop-types';

class ProdutosDoCarrinho extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <img src={ thumbnail } alt="imagem de um produto" />
        <span>{ price }</span>
      </div>
    );
  }
}

export default ProdutosDoCarrinho;

ProdutosDoCarrinho.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
