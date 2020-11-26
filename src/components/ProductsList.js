import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CategoriesList from './CategoriesList';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      productList: [],
      categoryId: '',
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.fetchProducts();
  // }

  fetchProducts() {
    const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((result) => this.setState({ productList: result.results }));
  }

  handleTypeChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    this.fetchProducts();
  }

  render() {
    const { productList } = this.state;
    return (
      <div>
        <div />
        <CategoriesList />
        <div>
          <input
            type="text"
            name="query"
            data-testid="query-input"
            onChange={ this.handleTypeChange }
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
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
          Carrinho de compras
          </Link>
          <br />
          <ul>
            {productList.length
              ? productList.map(({ id, title, thumbnail, price }) => (
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

export default ProductsList;
