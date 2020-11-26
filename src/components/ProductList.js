import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';
import * as api from '../services/api';
import CategoryList from './CategoryList';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      textValue: '',
      products: [],
      search: false,
      category: '',
    };

    this.updateState = this.updateState.bind(this);
    this.textValueChange = this.textValueChange.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  textValueChange({ target }) {
    const { value } = target;
    this.setState({
      textValue: value,
    });
  }

  async updateState() {
    const { textValue, category } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(category, textValue);
    this.setState({
      products: products.results,
      search: true,
    });
  }

  handleClickCategory({ target }) {
    this.setState({
      category: target.value,
    }, () => this.updateState());
  }

  render() {
    const { products, search } = this.state;

    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
<<<<<<< HEAD
        <CategoryList />
=======
        <CategoryList handleClickCategory={ this.handleClickCategory } />
>>>>>>> main-group-10
        <Link data-testid="shopping-cart-button" to="/carrinho">
          Carrinho
        </Link>
        <input
          data-testid="query-input"
          onChange={ (event) => this.textValueChange(event) }
        />
        <button
          data-testid="query-button"
          onClick={ this.updateState }
          type="button"
        >
          Procurar
        </button>
        <div>
          {products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))}
          {!products.length && search && <p>Nenhum produto foi encontrado</p>}
        </div>

      </div>
    );
  }
}

export default ProductList;
