import React, { Component } from 'react';

class ListagemDeProdutos extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}

export default ListagemDeProdutos;
