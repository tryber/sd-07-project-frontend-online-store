import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <button type="button" data-testid="shopping-cart-button">Carrinho</button>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default ProductList;
