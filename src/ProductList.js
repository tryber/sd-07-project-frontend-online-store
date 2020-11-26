import React from 'react';
import * as api from './services/api';
import Products from './Products';
import CategoryList from './CategoryList';


import { Link, BrowserRouter } from 'react-router-dom';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      categoryId: '',
      productsArray: [],
      click: false,
    };
    this.stateActual = this.stateActual.bind(this);
    this.responseGetProducts = this.responseGetProducts.bind(this);
  }

  stateActual({ target }) {
    this.setState({ inputValue: target.value });
  }

  async responseGetProducts() {
    const { categoryId, inputValue } = this.state;
    const resultApiProduct = await api
      .getProductsFromCategoryAndQuery(categoryId, inputValue);
    const { results } = resultApiProduct;
    this.setState({
      productsArray: results,
      click: true,
    });
  }

  render() {
    const { productsArray, inputValue, click } = this.state;
    const emptyArray = 0;
    if (productsArray.length > emptyArray) {
      return (
        <div>
          <input
            data-testid="query-input"
            value={ inputValue }
            onChange={ this.stateActual }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.responseGetProducts }
          >
            Pesquisar
          </button>
          <div>
            {productsArray
              .map((prod) => (<div key={ prod.id }><Products product={ prod } /></div>))}
          </div>
          <button type="button">
            <Link data-testid="shopping-cart-button" to="/ShoppingCart">
              Carrinho de compras
            </Link>
        </button>
        <CategoryList />
        </div>
      );
    }
    if (click) {
      return (
        <div>
          <input
            data-testid="query-input"
            value={ inputValue }
            onChange={ this.stateActual }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.responseGetProducts }
          >
            Pesquisar
          </button>
          <div>
            <p>Nenhum produto foi encontrado</p>
          </div>
          <button type="button">
          <BrowserRouter>
            <Link data-testid="shopping-cart-button" to="/ShoppingCart">
              Carrinho de compras
            </Link>
          </BrowserRouter>
        </button>
        <CategoryList />
        </div>
      );
    }
    return (
      <div>
        <input
          data-testid="query-input"
          value={ inputValue }
          onChange={ this.stateActual }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.responseGetProducts }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <button type="button">
          <BrowserRouter>
            <Link data-testid="shopping-cart-button" to="/ShoppingCart">
              Carrinho de compras
            </Link>
          </BrowserRouter>
        </button>
        <CategoryList />
      </div>
    );
  }
}

export default ProductList;
