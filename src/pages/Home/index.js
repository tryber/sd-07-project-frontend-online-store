import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      purchasedProducts: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.purchasedProducts = this.purchasedProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  purchasedProducts(product) {
    this.setState((state) => {
      const list = [...state.purchasedProducts, product];
      return {
        purchasedProducts: list,
      };
    });
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
    const { products, purchasedProducts } = this.state;
    return (
      <div className="main-container">
        <aside className="categories-container">
          <CategoryList handleChange={ this.handleChange } />
        </aside>
        <section className="products-container">
          <SearchBar
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
            purchasedProducts={ purchasedProducts }
          />
          <ProductList
            products={ products }
            purchasedProducts={ this.purchasedProducts }
          />
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    purchasedProducts: PropTypes.array,
  }),
};

Home.defaultProps = {
  location: {
    purchasedProducts: [],
  },
};

export default Home;
