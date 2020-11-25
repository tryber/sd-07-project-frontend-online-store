import React from 'react';
import { Link } from 'react-router-dom';
import * as api from './services/api';
import CategoriesList from './CategoriesList';
import shoppingCartLogo from './shopping-cart.png';
import './App.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categoryId: '',
      produtctList: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ produtctList: result.results }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  render() {
    const { produtctList } = this.state;
    return (
      <div className="product-list-container">
        <div className="categories-list">
          <CategoriesList handleChange={ this.handleChange } />
        </div>
        <div className="product-list">
          <input
            type="text"
            name="query"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
          <br />
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <img src={ shoppingCartLogo } alt="icon shopping cart" />
          </Link>
          <br />
          <ul>
            {produtctList.length
              ? produtctList.map(({ id, title, thumbnail, price }) => (
                <li
                  key={ id }
                  data-testid="product"
                >
                  <h3>{ title }</h3>
                  <img src={ thumbnail } alt="Product" />
                  <p>{ price }</p>
                </li>
              )) : (<li> Nenhum produto foi encontrado </li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
