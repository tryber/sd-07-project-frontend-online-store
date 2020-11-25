import React, { Component } from 'react';
import * as api from '../services/api';

class Listagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryId: '',
      productList: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ productList: result.results }));
  }

  handleChange({ target }) {
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
        <div data-testid="home-initial-message">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <p>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        </div>
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.handleClick() }
        >
          Pesquisar
        </button>
        <ul>
          {productList.length
            ? productList.map(({ id, title, thumbnail, price }) => (
              <li
                key={ id }
                data-testid="product"
              >
                <h4>{ title }</h4>
                <img src={ thumbnail } alt="Product" />
                <p>{ price }</p>
              </li>
            )) : (<li> Nenhum produto foi encontrado </li>)}
        </ul>
      </div>
    );
  }
}

export default Listagem;
