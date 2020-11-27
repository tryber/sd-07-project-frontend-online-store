import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ProductsList from './ProductsList';
import * as API from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      products: [],
      categories: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitAPI = this.handleSubmitAPI.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleUpdateCategory(prevProps, prevState);
  }

  async handleSubmitAPI() {
    const { inputValue } = this.state;
    if (inputValue) {
      const response = await API.getProductsFromCategoryAndQuery(inputValue);
      this.setState({ products: response.results });
    }
    return false;
  }

  async handleUpdateCategory(prevProps, prevState) {
    const { categories } = this.state;
    const { getProductsFromCategoryAndQuery } = API;
    if (prevState.categories !== categories) {
      const categoryUpdate = await getProductsFromCategoryAndQuery(null, categories);
      this.setState({ products: categoryUpdate.results });
    }
  }

  handleChangeCategory(event) {
    this.setState({ categories: event.target.value });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue, products, categories } = this.state;
    const message = 'Digite algum termo de pesquisa ou escolha uma categoria.';
    return (
      <div className="home">
        <div>
          <Categories handleChangeCategory={ this.handleChangeCategory } />
        </div>
        <div className="SearchBar-products">
          <div className="searchBar-car">
            <SearchBar
              inputValue={ inputValue }
              handleChange={ this.handleChange }
              handleSubmitAPI={ this.handleSubmitAPI }
            />
            <Link data-testid="shopping-cart-button" to="/cart">
              Carrinho de compras
            </Link>
          </div>
          {(categories !== '' || inputValue !== '')
            ? <ProductsList data={ products } />
            : <p data-testid="home-initial-message">{message}</p>}
        </div>
      </div>
    );
  }
}

export default Home;
