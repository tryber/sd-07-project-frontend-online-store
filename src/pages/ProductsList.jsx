import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';
import CategoriesList from '../components/CategoriesList';
import Logo from '../shoppingCartImage.png';

class ProductsList extends Component {
  constructor() {
    super();

    this.state = { categories: undefined }
  }

  componentDidMount() {
    this.requestCategories()
  }

  async requestCategories() {
    const categoriesList = await API.getCategories();
    this.setState({ categories: categoriesList })
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <div>
          {categories ? <CategoriesList categories={categories} /> : null }
        </div>
        <div>
          <input type="text" />
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link data-testid="shopping-cart-button" to="/PageCard">
            <img src={Logo} alt="shoppingCart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductsList;
