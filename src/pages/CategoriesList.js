import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import * as api from '../services/api';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryId: '',
      query: '',
    };
    this.CategoriesList = this.CategoriesList.bind(this);
  }

  componentDidMount() {
    this.CategoriesList();
  }


  CategoriesList() {
    api.getCategories()
      .then((categories) => {
        console.log(categories);
        this.setState({ categories });
      })
      .catch((error) => console.log('Promises rejected: ', error));
  }

  SearchProduct() {
    const { categoryId, query } = this.state;

    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((categorie) => {
        console.log(categorie);
        this.setState({ categorie });
      })
      .catch((error) => console.log('Promises rejected: ', error));
  }


  render() {
    return (
      <div className="home-initial">
        <div className="home-initial-input">
          <label htmlFor="home-initial-message">
            <input className="input" />
            <h3 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          </label>
        </div>
        <Link
          to="/shoopingcart"
          data-testid="shopping-cart-button"
          className="home-initial-link">
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
