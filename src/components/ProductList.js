import React, { Component } from 'react';
import * as api from '../services/api';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      categoryId: '',
      query: '',
      productList: [],
    };
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const { categoryId, query } = this.state;
    const product = api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ productList: product.result });
  }

  handleTypeChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <input
          type="text"
          name="query"
          data-testid="query-input"
          onChange={ this.handleTypeChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          {productList.length
            ? productlist.map(({ title, id, tumbnail, price }) => (
              <li
                key={ id }
                data-testid="product"
              >
                <h2>{title}</h2>
                <image src={ tumbnail } alt="product" />
                <p>{price}</p>
              </li>
            )) : (<li>Nenhum produto foi encontrado</li>)}
        </ul>
      </div>
    );
  }
}

export default ProductList;
