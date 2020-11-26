import React from 'react';
import * as api from '../services/api';
import ProductsList from './ProductsList';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      products: [],
    };

    this.showProducts = this.showProducts.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  showProducts() {
    const { query } = this.state;
    getProductsFromCategoryAndQuery('', query).then(({ products.result }) =>
      this.setState({ products });
    );
  }

  handleQuery({ target }) {
    this.setState({ query: target.value });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <input onChange={this.handleQuery} data-testid='query-input' />
        <button
          type='button'
          data-testid='query-button'
          onClick={this.showProducts}>
          Enviar
        </button>
        <div>
          <div data-testid='home-initial-message'>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
          <div data-testid='product'>
            {!products.length ?  <p>Nenhum produto foi encontrado</p> : products.map((product) => (
              <ProductsList key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
