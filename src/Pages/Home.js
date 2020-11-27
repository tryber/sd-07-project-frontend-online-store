import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import CategorieCard from '../Components/CategorieCard';
import ListCardsProduts from '../Components/ListCardsProduts';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      categories: [],
      products: [],
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.SearchProductForCategory = this.SearchProductForCategory.bind(this);
    this.SearchProduct = this.SearchProduct.bind(this);
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    const allCategories = async () => {
      const list = await api.getCategories();
      this.setState({ categories: list });
    };
    allCategories();
  }

  onSearchTextChange({ target }) {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }

  async getProducts(categoryId, query) {
    const products = await api.getProductsFromCategoryAndQuery(categoryId, query);
    return products;
  }

  async SearchProduct() {
    const { searchText } = this.state;
    const categoryId = 'ALL';
    const { results } = await this.getProducts(categoryId, searchText);
    this.setState({ products: results });
  }

  async SearchProductForCategory(object) {
    const { searchText } = this.state;
    const categoryId = object.id;
    console.log(categoryId);
    console.log(searchText);

    const { results } = await this.getProducts(categoryId, searchText);
    this.setState({ products: results });
  }

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        <div className="left">
          <section>
            <div>
              {
                categories.map((category) => (<CategorieCard
                  key={ category.id }
                  category={ category }
                  onclick={ () => this.SearchProductForCategory(category) }
                />))
              }
            </div>
          </section>
        </div>

        <div className="top">
          <header>
            <div className="header-search-form">
              <form>
                <div className="header-query-input">
                  <input
                    data-testid="query-input"
                    id="searchtext"
                    type="text"
                    name="searchText"
                    placeholder="Digite algum termo de pesquisa aqui"
                    autoComplete="off"
                    value={ this.state.searchText }
                    onChange={ this.onSearchTextChange }
                  />
                </div>
                <div className="header-query-button">
                  <button
                    type="button"
                    onClick={ () => this.SearchProduct() }
                    className="button-search"
                    data-testid="query-button"
                  >
                    Procurar
                  </button>
                </div>

                <div className="header-link-cart">
                  <Link data-testid="shopping-cart-button" to="/cartBuy">
                    <img
                      className="cartBuy"
                      src="https://img.icons8.com/ios/452/shopping-cart.png"
                      alt="imagem de carrinho"
                    />
                  </Link>

                </div>
                <div className="header-initial-message">
                  <p data-testid="home-initial-message">
                    Digite algum termo de pesquisa ou escolha uma categoria.
                  </p>
                </div>
              </form>
            </div>
          </header>
        </div>
        <div className="center">
          <section>
            <div>
              {
                products.map((product) => (<ListCardsProduts
                  key={ product.id }
                  product={ product }
                />))
              }
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
