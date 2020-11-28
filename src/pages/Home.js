import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import '../App.css';
import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onClickCategory = this.onClickCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);

    this.state = {
      searchItems: '',
      categoryId: '',
      itemsFindOut: [],
      loading: false,
    };
  }

  async onClickCategory(event) {
    const categoryId = event.target.id;
    const products = await api.getProductsFromCategoryAndQuery(categoryId);
    this.setState({
      itemsFindOut: products,
      categoryId: categoryId,
      loading: true,
    });
  }

  handleTextInput(event) {
    this.setState({
      searchItems: event.target.value,
    });
  }

  handleSubmit() {
    const { searchItems, loading } = this.state;
    api.getProductsFromCategoryAndQuery(searchItems)
      .then((products) => this.setState({ itemsFindOut: products, loading: true }))
      .catch((error) => console.log(error));
    if (loading === false) { return <Redirect to="/pages/ProductNotFound.jsx" />; }
  }

  render() {
    const { categoryId } = this.state;
    return (
      <main>
        <header>
          <div>
            <h1>HOME</h1>
          </div>
          <div>
            <SearchBar
              parentState={ this.state }
              categoryId={ categoryId }
              handleSubmit={ this.handleSubmit }
              handleTextInput={ this.handleTextInput }
            />
          </div>
          <div><ShoppingCartButton /></div>
        </header>
        <ListCategories onClickCategory={ this.onClickCategory } />
      </main>
    );
  }
}
