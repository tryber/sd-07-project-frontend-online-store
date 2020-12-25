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
      counter: 0,
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.changeStateValue = this.changeStateValue.bind(this);
    this.fetchApiByQuery = this.fetchApiByQuery.bind(this);
    this.getItensLocalStorage = this.getItensLocalStorage.bind(this);
    this.productsCounter = this.productsCounter.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.getItensLocalStorage();
  }

  getItensLocalStorage() {
    const quantity = JSON.parse(localStorage.getItem('cartItems'));
    if (!quantity) {
      const tamanho = 0;
      this.setState({ counter: tamanho });
    } else {
      const tamanho = quantity.length;
      this.setState({ counter: tamanho });
    }
  }

  productsCounter() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
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
    const { products, categories, counter } = this.state;
    return (
      <div>
        <SearchBar
          handleChange={ this.changeStateValue }
          fetchApi={ this.fetchApiByQuery }
          counter={ counter }
        />
        <div className="container">
          <CategoriesList
            handleChange={ this.changeStateValue }
            arrayOfCategories={ categories }
          />
          <ProductList
            arrayOfProducts={ products }
            onAddList={ this.productsCounter }
          />
        </div>
      </div>
    );
  }
}

export default Home;
