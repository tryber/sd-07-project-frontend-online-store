import React, { Component } from 'react';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import NotFound from '../components/NotFound';
import ShoppingCartButton from '../components/ShoppingCartButton';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.addToCard = this.addToCard.bind(this);
    this.state = {
      categories: [],
      products: {},
      status: false,
      shoppingCard: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    this.StatusSet(prevState);
  }

  onClick(query) {
    this.fetchProducts(query);
  }

  StatusSet(prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      this.setState({ status: true });
    }
  }

  async fetchCategories() {
    this.setState({ categories: await api.getCategories() });
  }

  async fetchProducts(query, categoryId = '') {
    this.setState({
      products: await api.getProductsFromCategoryAndQuery(categoryId, query),
    });
  }

  addToCard(id, title, price, thumbnail) {
    const addProduct = {
      id,
      title,
      quantity: 1,
      price,
      thumbnail,
    };
    const { shoppingCard } = this.state;
    const foundProduct = shoppingCard.findIndex((product) => product.id === id);
    const productNotFound = -1;
    if (foundProduct === productNotFound) {
      return this.setState((oldState) => ({
        shoppingCard: [...oldState.shoppingCard, addProduct],
      }));
    }
    shoppingCard[foundProduct].quantity += 1;
    this.setState({
      shoppingCard,
    });
  }

  render() {
    const { categories, status, products, shoppingCard } = this.state;
    return (
      <div>
        <SearchBar onClick={ this.onClick } />
        <ShoppingCartButton productsInShoppingCart={ shoppingCard } />
        {status
          && (products.results.length ? (
            <ProductCard
              products={ products.results }
              addToCard={ this.addToCard }
            />
          ) : (
            <NotFound />
          ))}
        <Category categories={ categories } />
      </div>
    );
  }
}

export default Home;
