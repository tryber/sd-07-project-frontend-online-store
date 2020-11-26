import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import QueryBar from '../components/QueryBar';
import ProductItem from '../components/ProductItem';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      query: '',
      object: [],
    };
    this.CategoriesList = this.CategoriesList.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.CategoriesList();
  }

  onInputSearchChange({ target }) {
    this.setState({ query: target.value });
  }

  async getProducts(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    return products;
  }

  async SearchProduct() {
    const { query } = this.state;
    const categoryId = 'ALL';
    const { results } = await this.getProducts(categoryId, query);
    this.setState({ object: results });
  }


  CategoriesList() {
    api.getCategories()
      .then((categories) => {
        this.setState({ categories });
      })
      .catch((error) => console.log('Promises rejected: ', error));
  }

  render() {
    const { categories, object, query } = this.state;

    return (
      <div className="main-list">
        <div className="side-bar">
          { categories.map((category) => (<ProductItem
            key={ category.id }
            category={ category }
          />))}
        </div>
        <div className="main">
          <QueryBar
            query={ query }
            onQueryChange={ this.onInputSearchChange }
            onClick={ this.SearchProduct }
          />
          <section className="prodoct-cards">
            {object.map((product) => (
              <ProductCard key={ product.id } product={ product } />
            ))}
          </section>
        </div>
      </div>
    );
  }
}


export default ProductList;
