import React, { Component } from 'react';
import { CategoryList, SearchBar, ProductList, Header } from '../../components';
import * as api from '../../services/api';
import * as lsapi from '../../services/lsapi';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryId: '',
      products: [],
      shoppingCartQuantity: 0,
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.updateShoppintCartQuantity = this.updateShoppintCartQuantity.bind(this);
  }

  componentDidMount() {
    this.updateShoppintCartQuantity();
  }

  async fetchProducts() {
    const { categoryId, query } = this.state;
    const result = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({ products: result.results });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      if (target.type === 'radio') {
        this.fetchProducts();
      }
    });
  }

  searchClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  updateShoppintCartQuantity() {
    this.setState({ shoppingCartQuantity: lsapi.getTotalQuantity() });
  }

  render() {
    const { products, shoppingCartQuantity } = this.state;
    return (
      <div className="main-container">
        <Header quantity={ shoppingCartQuantity } />
        <aside className="categories-container">
          <CategoryList handleChange={ this.handleChange } />
        </aside>
        <section className="products-container">
          <SearchBar
            handleChange={ this.handleChange }
            handleClick={ this.searchClick }
          />
          <ProductList
            products={ products }
            quantityChange={ this.updateShoppintCartQuantity }
          />
        </section>
      </div>
    );
  }
}

export default Home;
