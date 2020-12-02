import React from 'react';
import BotaoCarrinho from '../components/BotaoCarrinho';

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
        </ul>
      </div>
    );
  }
}

export default DetalhesDoProduto;
