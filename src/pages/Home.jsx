import React from 'react';
import { Link } from 'react-router-dom';
import CategorieFilter from '../components/CategorieFilter';
import * as api from '../services/api';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

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
    this.updateValueCategory = this.updateValueCategory.bind(this);
  }

  async findProduct() {
    const { categoryId, searchText } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(categoryId, searchText);
    this.setState({
      products: products.results,
    });
    console.log(products);
  }

  updateValueCategory(event) {
    const { value } = event.target;
    this.setState({ categoryId: value });
    this.findProduct();
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <div>
          <CategorieFilter />
        </div>
        <div>
          <ProductList products={ products } />
        </div>
        <Link data-testid="shopping-cart-button" to="/pages/shoppingcart">
          <img src="https://image.flaticon.com/icons/png/512/34/34562.png" alt="icone-carrinho" />
        </Link>     

        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
      </div>
    );
  }
}
