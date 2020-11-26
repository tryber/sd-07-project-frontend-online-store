import React from 'react';
import { Link } from 'react-router-dom';
import CategorieFilter from '../components/CategorieFilter';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: [],
      categoryId: '',
    };

    this.findProduct = this.findProduct.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  async findProduct() {
    const products = await api.getProductsFromCategoryAndQuery(
      this.state.categoryId,
      this.state.searchText
    );
    this.setState({
      products: products.results,
    });
  }

  updateValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <CategorieFilter  />
        <div>
          <input
            data-testid="query-input"
            onChange={this.updateValue}
            type="text"
            value={searchText}
            name="searchText"
          />
          <button data-testid="query-button" onClick={this.findProduct}>
            Search
          </button>
        </div>
        <div>
          {this.state.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link data-testid="shopping-cart-button" to="/pages/shoppingcart">
          <img
            src="https://image.flaticon.com/icons/png/512/34/34562.png"
            alt="icone-carrinho"
          />
        </Link>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
      </div>
    );
  }
}
