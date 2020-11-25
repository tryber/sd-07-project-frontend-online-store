import React from 'react';
import '../App.css';
import * as api from '../services/api';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      product: {},
      categoryId: 0,
      loading: false,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    this.setState({ loading: true }, async () => {
      const { categoryId, term } = this.state;
      const getingProduct = await api.getProductsFromCategoryAndQuery(
        categoryId,
        term,
      );
      this.setState({ loading: false, product: getingProduct });
    });
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          className="input-search"
          type="text"
          placeholder="Digite algum termo de pesquisa aqui"
        />
        <button type="button" className="button-search" data-testid="query-button">
          Procurar
        </button>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

export default Search;
