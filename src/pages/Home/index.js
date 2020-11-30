import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CategoryList, SearchBar, ProductList, Header } from '../../components';
import * as api from '../../services/api';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryId: '',
      products: [],
      purchasedProducts: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
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

  render() {
    const { products, purchasedProducts } = this.state;
    const { location } = this.props;
    return (
      <div className="main-container">
        <Header pathname={ location.pathname } />
        <aside className="categories-container">
          <CategoryList handleChange={ this.handleChange } />
        </aside>
        <section className="products-container">
          <SearchBar
            handleChange={ this.handleChange }
            handleClick={ this.searchClick }
            purchasedProducts={ purchasedProducts }
          />
          <ProductList
            products={ products }
          />
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
