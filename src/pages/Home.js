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
    const { categories, inputValue } = this.state;
    const { getProductsFromCategoryAndQuery } = API;
    if (prevState.categories !== categories) {
      const categoryUp = await getProductsFromCategoryAndQuery(categories, inputValue);
      this.setState({ products: categoryUp.results });
    }
  }

  handleChangeCategory(event) {
    this.setState({ categories: event.target.value });
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { inputValue, products } = this.state;
    return (
      <div className="home">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        <SearchBar
          inputValue={ inputValue }
          handleChange={ this.handleChange }
          handleSubmitAPI={ this.handleSubmitAPI }
        />
        <ProductsList products={ products } />
        <Categories handleChangeCategory={ this.handleChangeCategory } />
      </div>
    );
  }
}

export default Home;
