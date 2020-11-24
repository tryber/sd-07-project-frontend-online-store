import React, { Component } from 'react';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      textValue: '',
      products,
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
    const products = await api.getProductsFromQuery(textValue);
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <input data-testid="query-input" onChange={ this.textValueChange } />
        {products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}

export default ProductList;
