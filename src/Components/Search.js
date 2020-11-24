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
	this.getProduct()
  }

  getProduct() {
    this.setState({ loading: true }, async () => {
      const getingProduct = await api.getProductsFromCategoryAndQuery(
        this.state.categoryId,
        this.state.term
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
        <button className="button-search" data-testid="query-button">
          Procurar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Search;
