import React from 'react';
import '../App.css';
import * as api from '../services/api';
import CardList from './CardList';
import ProductNotFound from './ProductNotFound';

class Search extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      term: '',
      products: {},
      status: '',
      categoryId: 0,
    };
    this.getProduct = this.getProduct.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  getProduct() {
    this.setState( async () => {
      const { categoryId, term } = this.state;
      const getingProduct = await api.getProductsFromCategoryAndQuery(
        categoryId,
        term,
      );
      this.setState({ products: getingProduct.results, status: 'OK' });
    });
  } 

  onSearchChange(event) {
   const { name, value } = event.target
   this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          className="input-search"
          type="text"
          name="term"
          value={this.state.term}
          placeholder="Digite algum termo de pesquisa aqui"
          onChange={this.onSearchChange}
        />
        <button
          type="button"
          className="button-search"
          data-testid="query-button"
          onClick={this.getProduct}
        >
        Procurar
        </button>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {this.state.status === 'OK' ? <CardList products={this.state.products} /> : <ProductNotFound /> }
        </div>
      </div>
    );
  }
}

export default Search;
