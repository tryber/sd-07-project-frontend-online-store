import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import '../App.css';
import ListCategories from '../components/ListCategories';
import ShoppingCartButton from '../components/ShoppingCartButton';
import ProductCard from '../components/ProductCard';
import * as api from '../services/api';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onClickCategory = this.onClickCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleUndefined = this.handleUndefined.bind(this);
    this.saveItems = this.saveItems.bind(this);

    this.state = {
      searchItems: '',
      categoryId: '',
      itemsFindOut: [],
      loading: false,
      cart_quantity: localStorage.getItem('items_cart'),
    };
  }

  async onClickCategory(event) {
    const categoryId = event.target.id;
    const products = await api.getProductsFromCategoryAndQuery(categoryId);
    this.setState({
      itemsFindOut: products,
      categoryId,
      loading: true,
    });
  }

  handleTextInput(event) {
    this.setState({
      searchItems: event.target.value,
    });
  }

  handleSubmit() {
    const { searchItems } = this.state;
    api.getProductsFromCategoryAndQuery(searchItems)
      .then((products) => this.setState({ itemsFindOut: products, loading: true }))
      .catch((error) => console.log(error));
  }

  handleUndefined() {
    const { loading, itemsFindOut } = this.state;
    if (!itemsFindOut.lenght || loading === false) {
      return <Redirect to="./pages/ProductNotFound" />;
    }
  }

  saveItems() {
    const { item } = this.props;
    const {
      id,
      available_quantity: availableQuantity,
      title,
      price,
      thumbnail,
    } = item;
    this.setState((prevState) => {
      return {
        cart_quantity: prevState.cart_quantity,
      }
    })
    if (!localStorage.length) {
      localStorage.setItem('items',
        JSON.stringify([{
          sku: id,
          name: title,
          cost: price,
          quantity: availableQuantity,
          image: thumbnail,
        }]));
        localStorage.setItem('items_cart', 1)
      return;
    }
    const objectValues = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items',
      JSON.stringify([...objectValues, {
        sku: id,
        name: title,
        cost: price,
        quantity: availableQuantity,
        image: thumbnail,
      }]));
    const cart_quantity = Number(localStorage.getItem('items_cart')) + 1;
    localStorage.setItem('items_cart', cart_quantity);
  }

  render() {
    const { categoryId, cart_quantity, loading, itemsFindOut } = this.state;
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
              handleUndefined={ this.handleUndefined }
            />
          </div>
          <div><ShoppingCartButton cart_quantity={ cart_quantity } /></div>
        </header>
        <ListCategories onClickCategory={ this.onClickCategory } />
        <div className="grid">
          <div className="item">
            {loading ? itemsFindOut.results.map((item) => {
              const { id } = item;
              return <ProductCard key={ id } item={ item } />;
            }) : ''}
          </div>
        </div>
      </main>
    );
  }
}
