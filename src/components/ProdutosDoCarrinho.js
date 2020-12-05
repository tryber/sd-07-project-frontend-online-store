import React from 'react';
import PropTypes from 'prop-types';
import BotoesProduto from './BotoesProduto';

class ProdutosDoCarrinho extends React.Component {
  render() {
    const { product, handleTotalPrice, updateLocalStorage } = this.props;
    const { title, price, thumbnail, quantity, id } = product;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <img src={ thumbnail } alt="imagem de um produto" />
        <span>{ price }</span>
        <BotoesProduto
          id={ id }
          quantity={ quantity }
          price={ price }
          handleTotalPrice={ handleTotalPrice }
          updateLocalStorage={ updateLocalStorage }
        />
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
      </div>
    );
  }
}

export default ProdutosDoCarrinho;

ProdutosDoCarrinho.propTypes = {
  handleTotalPrice: PropTypes.func.isRequired,
  updateLocalStorage: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
