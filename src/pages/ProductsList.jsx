import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/api";
import CategoriesList from "../components/CategoriesList";
import Logo from "../shoppingCartImage.png";

class ProductsList extends Component {
  constructor() {
    super();
    this.requestProductsFromCategoryAndQuery = this.requestProductsFromCategoryAndQuery.bind(
      this
    );
    this.state = {
      categories: undefined,
      products: [],
      search: '',
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const categoriesList = await API.getCategories();
    this.setState({ categories: categoriesList });
  }
  async requestProductsFromCategoryAndQuery() {
    const ListProducts = await API.getProductsFromCategoryAndQuery(this.state.search);
    this.setState({ products: ListProducts });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <div>
          {categories ? <CategoriesList categories={categories} /> : null}
        </div>
        <div>
          <input
            type="text"
            onChange={this.requestProductsFromCategoryAndQuery}
          />
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
