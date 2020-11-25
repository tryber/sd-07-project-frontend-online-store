import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/api";
import CategoriesList from "../components/CategoriesList";
import Logo from "../shoppingCartImage.png";
import Product from './Product';

class ProductsList extends Component {
  constructor() {
    super();
    this.showProducts = this.showProducts.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      categories: undefined,
      products: [],
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
    const ListProducts = await API.getProductsFromCategoryAndQuery(undefined, this.state.search);
    if (ListProducts === "") return <span>Nenhum produto foi encontrado</span>;
    const { results } = ListProducts;
    return (this.setState({ products: results }));
  }

  showProducts() {
    return (
      <div>
        {this.state.products.map((element) => {
          return <Product
            key={element.id}
            title={element.title}
            price={element.price}
            thumbnail={element.thumbnail}
          />;
        })}
      </div>
    );
  }

  showMessage() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }
  
  render() {
    const { categories, products } = this.state;

    return (
      <div>
        <div>
          {categories ? <CategoriesList categories={categories} /> : null}
        </div>
        <div>
          <input
            type="text"
            data-testid="query-input"
            onChange={this.handleChange}
          />
          <button data-testid='query-button' onClick={this.searchQueryProducts}>Pesquisar</button>
          {products === [] ? this.showMessage() : this.showProducts()}
          <Link data-testid="shopping-cart-button" to="/PageCard">
            <img src={Logo} alt="shoppingCart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductsList;
