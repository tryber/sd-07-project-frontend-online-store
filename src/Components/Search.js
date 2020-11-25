import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import * as api from '../services/api';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      product: {},
      categoryId: 0,
      loading: false,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    this.setState({ loading: true }, async () => {
      const { categoryId, term } = this.state;
      const getingProduct = await api.getProductsFromCategoryAndQuery(
        categoryId,
        term,
      );
      this.setState({ loading: false, product: getingProduct });
    });
  }

  render() {
    return (
      <div>
        <input
          data-testid="query-input"
          className="input-search"
          type="text"
          placeholder="Digite algum termo de pesquisa aqui"
        />
        <button type="button" className="button-search" data-testid="query-button">
          Procurar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link data-testid="shopping-cart-button" to="/cartBuy">
            <img
              className="cartBuy"
              src="https://img.icons8.com/ios/452/shopping-cart.png"
              alt="imagem de carrinho"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
