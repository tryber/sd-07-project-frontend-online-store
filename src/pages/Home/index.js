import React, { Component } from 'react';
import { CategoryList, SearchBar, ProductList } from '../../components';
import * as api from '../../services/api';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryId: '',
      products: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ products: result.results }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="main-container">
        <aside className="categories-container">
          <CategoryList handleChange={ this.handleChange } />
        </aside>
        <section className="products-container">
          <SearchBar
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
          />
          <ProductList products={ products } />
        </section>
      </div>
    );
  }
}

export default Home;
