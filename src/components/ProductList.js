import React, { Component } from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      products: [],
      search: false,
    };

    this.updateState = this.updateState.bind(this);
    this.textValueChange = this.textValueChange.bind(this);
  }

  textValueChange({ target }) {
    const { value } = target;
    this.setState({
      textValue: value,
    });
  }

  async updateState() {
    const { textValue } = this.state;
    const products = await api.getProductsFromCategoryAndQuery('', textValue);
    this.setState({
      products: products.results,
      search: true,
    });
  }

  render() {
    const { products, search } = this.state;

    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input
          data-testid="query-input"
          onChange={ (event) => this.textValueChange(event) }
        />
        <button
          data-testid="query-button"
          onClick={ () => this.updateState() }
          type="button"
        >
          Procurar
        </button>
        <div>
          {products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))}
          {!products.length && search && <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}

export default ProductList;
