import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import ProductList from './ProductList';
import * as api from '../services/api';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: '',
      products: [],
      requested: false,
    }
  }

  handleChange({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  async searchProducts(query) {
    const response = await api.getProductsFromCategoryAndQuery(query);
    const products = response.results;

    return this.setState({ products, requested: true })
  }

  productsList() {
    return this.state.products.map(({ title, id, thumbnail, price}) => (
      <ProductList title={title} image={thumbnail} price={price} key={id} />
    ));
  }

  render() {
    const { inputValue, requested } = this.state;

    return (
      <div>
        <input type="text" data-testid="query-input" onChange={this.handleChange} />
        <button type="button" data-testid="query-button" onClick={() => this.searchProducts(inputValue)}>Pesquisar</button>
        <Link data-testid="shopping-cart-button" to="/cart">
            <i className="fas fa-shopping-cart" />
        </Link>
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Category />
        { requested ? this.productsList() : '' } 
      </div>
    );
  }
}

export default Main;
