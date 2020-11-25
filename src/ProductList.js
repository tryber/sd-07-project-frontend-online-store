import React, { Component } from 'react';
import * as api from './services/api.js';
import Products from './Products.jsx';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      productsArray: [],
      click: false,
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
    this.setState({
      productsArray: results,
      click: true,
    });
  }

  render() {
    if (this.state.productsArray.length > 0) {
      return (
        <div>
          <input data-testid="query-input" value={this.state.inputValue} onChange={this.stateActual} />
          <button data-testid="query-button"onClick={this.responseGetProducts}>Pesquisar</button>
          <div>
            {this.state.productsArray.map(product => <div key={product.id}> <Products product={product} /> </div>)}
          </div>
        </div>
      );
    } else if (this.state.click) {
      return (
        <div>
          <input data-testid="query-input" value={this.state.inputValue} onChange={this.stateActual} />
          <button data-testid="query-button"onClick={this.responseGetProducts}>Pesquisar</button>
          <div>
            <p>Nenhum produto foi encontrado</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <input data-testid="query-input" value={this.state.inputValue} onChange={this.stateActual} />
        <button data-testid="query-button"onClick={this.responseGetProducts}>Pesquisar</button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
    
  }  
}

export default ProductList;