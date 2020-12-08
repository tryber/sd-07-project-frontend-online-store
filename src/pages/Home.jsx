import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import CategoriesList from '../components/CategoriesList';
import * as mlAPI from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      categoryId: '',
      searchElement: '',
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.changeStateValue = this.changeStateValue.bind(this);
    this.fetchApiByQuery = this.fetchApiByQuery.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categoriesList = await mlAPI.getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  async fetchApiByQuery() {
    this.setState(
      async () => {
        const { categoryId, searchElement } = this.state;
        const segmentedItens = await mlAPI
          .getProductsFromCategoryAndQuery(
            categoryId, searchElement,
          );
        this.setState({
          products: [...segmentedItens.results],
        });
      },
    );
  }

  changeStateValue(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.fetchApiByQuery();
  }

  render() {
    const { products, categories } = this.state;
    return (
      <div>
        <SearchBar
          handleChange={ this.changeStateValue }
          fetchApi={ this.fetchApiByQuery }
        />
        <CategoriesList
          handleChange={ this.changeStateValue }
          arrayOfCategories={ categories }
        />
        <ProductList arrayOfProducts={ products } />
      </div>
    );
  }
}

export default Home;
