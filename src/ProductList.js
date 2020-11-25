import React, { Component } from 'react';
import * as api from './services/api.js';
import Products from './Products.jsx';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      productsArray: [],
    };
    this.stateActual = this.stateActual.bind(this);
    this.responseGetProducts = this.responseGetProducts.bind(this);
  }

  stateActual({ target }) {
    this.setState({ inputValue: target.value });
  }

  async responseGetProducts() {
    // const resultCategory = await api.getCategories();
    const resultApiProduct = await api.getProduct(this.state.inputValue);
    const { results } = resultApiProduct;
    this.setState({ productsArray: results });
  }

  render() {
    return (
      <div>
        <input data-testid="query-input" value={this.state.inputValue} onChange={this.stateActual} />
        <button data-testid="query-button"onClick={this.responseGetProducts}>Pesquisar</button>
        <div>
          {this.state.productsArray.map(product => <div key={product.id}> <Products product={product} /> </div>)}
        </div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }  
}

export default ProductList;