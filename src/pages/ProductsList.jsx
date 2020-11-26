import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/api";
import CategoriesList from "../components/CategoriesList";
import Logo from "../shoppingCartImage.png";
import ShowProducts from "../components/ShowProducts";

class ProductsList extends Component {
  constructor() {
    super();
    this.showMessage = this.showMessage.bind(this);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);
    this.categoryChoice = this.categoryChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      category: undefined,
      categories: undefined,
      products: undefined,
      search: "",
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const categoriesList = await API.getCategories();
    this.setState({ categories: categoriesList });
  }

  async searchQueryProducts() {
    const ListProducts = await API.getProductsFromCategoryAndQuery(this.state.category, this.state.search);
    if (ListProducts === "") return <span>Nenhum produto foi encontrado</span>;
    const { results } = ListProducts;
    return (this.setState({ products: results }));
  }

  showMessage() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }

  categoryChoice({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.searchQueryProducts();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }
  
  render() {
    const { categories, products } = this.state;

    return (
      <div>
        <div>
          {categories ? categories.map((categorie) => <CategoriesList
            key={categorie.id}
            categorie={categorie}
            onCategoryChoice={this.categoryChoice} />
          ) : null }
        </div>
        <div>
          <input
            name="search"
            type="text"
            data-testid="query-input"
            onChange={this.handleChange}
          />
          <button data-testid='query-button' onClick={this.searchQueryProducts}>Pesquisar</button>
          {products === undefined ? this.showMessage() : <ShowProducts products={products} />}
          <Link data-testid="shopping-cart-button" to="/PageCard">
            <img src={Logo} alt="shoppingCart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductsList;
