import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesCard from '../components/CategoriesCard';


import * as api from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      object: [],
    };
    this.CategoriesList = this.CategoriesList.bind(this);
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.CategoriesList();
  }

  onInputSearchChange({ target }) {
    this.setState({ query: target.value });
  }

  async getProducts(categoryId, query) {    
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);

    return products;   
  }

  async SearchProduct() {
    const { query } = this.state;
    const categoryId = 'ALL';    
    const { results } = await this.getProducts(categoryId, query);     
    this.setState({ object: results });
  }

  CategoriesList() {
    api.getCategories()
      .then((categories) => {
        // console.log(categories);
        //this.setState({ categories });
      })
      .catch((error) => console.log('Promises rejected: ', error));
  }

  render() {
    const { object } = this.state;
    const { query } = this.state;
    //console.log(object);
    //console.log(query);
    return (
      <div className="home-initial">
        <div className="home-initial-input">
          <label htmlFor="home-initial-message">
            <input
              className="input"
              data-testid="query-input"
              placeholder="Pesquisar"
              value={ query }
              onChange={ this.onInputSearchChange }
            />
            <button
              data-testid="query-button"
              type="button"
              onClick={ this.SearchProduct }
            >
              Pesquisar
            </button>
          </label>
          <section>
            {object.map((product) => (
              <CategoriesCard key={ product.id } product={ product } />
            ))}
          </section>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
        <Link
          to="/shoopingcart"
          data-testid="shopping-cart-button"
          className="home-initial-link"
        >
          <img
            src="images/icons-shopping-cart.png"
            alt="Carrinho de Compras"
          />
        </Link>
      </div>
    );
  }
}

export default CategoriesList;
