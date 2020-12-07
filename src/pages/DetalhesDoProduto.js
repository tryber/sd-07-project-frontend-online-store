import React from 'react';
import BotaoCarrinho from '../components/BotaoCarrinho';
import * as FunctionsToCart from '../components/FunctionsToCart';

class DetalhesDoProduto extends React.Component {
  render() {
    const jsonParseGetItem = JSON.parse(localStorage.getItem('productDetails'));
    const {
      title,
      price,
      condition,
      thumbnail,
      id,
    } = jsonParseGetItem;
    const quantityDefaultWhenAddToCart = 1;

    return (
      <div>
        <BotaoCarrinho />
        <div>
          <h2 data-testid="product-detail-name">{title}</h2>
          <span>{price}</span>
          <br />
          <img src={ thumbnail } alt="imagem de um produto" />
        </div>
        <ul>
          <li>
            Condição do produto:
            {condition}
          </li>
          <li>
            Quantidade disponível:
            {id}
          </li>
          <li>
            Preço:
            {price}
          </li>
        </ul>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => FunctionsToCart
            .addToCart(title, price, thumbnail, quantityDefaultWhenAddToCart, id) }
        >
          Adicionar ao seu carrinho
        </button>
      </div>
    );
  }
}

export default DetalhesDoProduto;
