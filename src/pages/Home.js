import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import '../App.css'
import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
import { Redirect } from 'react-router-dom';
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
    }
  }

  handleSubmit() {
    console.log('alou');
    api.getProductsFromCategoryAndQuery(this.state.searchItems)
    .then(products => this.setState({ itemsFindOut: products, loading:true }))
    .catch(error => console.log(error))
    if (this.state.loading === false) { return <Redirect to="/pages/ProductNotFound.jsx" /> }
  }

  handleTextInput(event) {
    this.setState({
      searchItems: event.target.value
    })
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
  
  render() {
    return (
      <main>
        <header>
          <div>
            <h3>Aqui vai uma logo</h3></div>
          <div>
            <SearchBar
              parentState={this.state}
              categoryId={this.state.categoryId}
              handleSubmit={this.handleSubmit}
              handleTextInput={this.handleTextInput}
            />
          </div>
          <div><ShoppingCartButton /></div>
        </header>
          <h1>Home</h1>
          <ListCategories onClickCategory={this.onClickCategory} />
        </main>
    );
  }
}
