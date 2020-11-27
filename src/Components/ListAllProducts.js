import React from 'react';
import '../App.css';
import * as api from '../services/api';
import CardList from './CardList';
import ProductNotFound from './ProductNotFound';
import DigiteTermo from './DigiteTermo';

class ListAllProducts extends React.Component {
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

  onSearchChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  getProduct() {
    this.setState(async () => {
      const result = 0;
      const { categoryId, term } = this.state;
      const getingProduct = await api.getProductsFromCategoryAndQuery(
        categoryId,
        term,
      );
      console.log(getingProduct);
      if (getingProduct.results.length !== result) {
        this.setState({ products: getingProduct.results, status: 'OK' });
      } else {
        this.setState({ products: getingProduct.results, status: 'Fail' });
      }
    });
  }

  render() {
    const { term, products, status } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          className="input-search"
          type="text"
          name="term"
          value={ term }
          placeholder="Digite algum termo de pesquisa aqui"
          onChange={ this.onSearchChange }
        />
        <button
          type="button"
          className="button-search"
          data-testid="query-button"
          onClick={ this.getProduct }
        >
          Procurar
        </button>
        <div>
          { status === 'OK'
          && status !== 'Fail' ? <CardList products={ products } /> : <DigiteTermo /> }
          { status === 'Fail' ? <ProductNotFound /> : '' }
        </div>
      </div>
    );
  }
}

export default ListAllProducts;
