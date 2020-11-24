import React, { Component } from 'react';
import * as api from './services/api.js';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }

  }
  render() {
    return (
      <div>
        <input data-testid="query-input" value={this.state.inputValue}/>
        <button data-testid="query-button">Pesquisar</button>
        <div>

        </div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }  
}

export default ProductList;