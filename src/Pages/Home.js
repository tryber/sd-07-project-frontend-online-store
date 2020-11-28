import React from 'react';
import './Home.css';
import CategorieCard from '../Components/CategorieCard';
import ProductNotFound from '../Components/ProductNotFound';
import CardsRenderList from '../Components/CardsRenderList';
import ButtonCart from '../Components/ButtonCart';
import DigiteTermo from '../Components/DigiteTermo';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      status: '',
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
    const products = await api.getProductsFromCategoryAndQuery(
      categoryId,
      query
    );
    return products;
  }

  async SearchProduct() {
    const { searchText } = this.state;
    const categoryId = 'ALL';
    const { results } = await this.getProducts(categoryId, searchText);
    let falha;
    if (results.length === 0) {
      falha = 'Fail';
    } else {
      falha = 'OK';
    }
    this.setState({ products: results, status: falha });
  }

  async SearchProductForCategory(object) {
    const { searchText } = this.state;
    const categoryId = object.id;
    const { results } = await this.getProducts(categoryId, searchText);
    this.setState({ products: results, status: 'OK' });
  }

  render() {
    const { categories, products, searchText, status } = this.state;
    return (
      <div>
        <div className="left">
          <section>
            <div>
              {categories.map((category) => (
                <CategorieCard
                  key={category.id}
                  category={category}
                  onclick={() => this.SearchProductForCategory(category)}
                />
              ))}
            </div>
          </section>
        </div>
        <div className="top">
          <header>
            <div className="header-query-input">
              <input
                className="input-search"
                data-testid="query-input"
                id="searchtext"
                type="text"
                name="searchText"
                placeholder="Digite algum termo de pesquisa aqui"
                autoComplete="off"
                value={this.state.searchText}
                onChange={this.onSearchTextChange}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => this.SearchProduct()}
                className="button-search"
                data-testid="query-button"
              >
                Procurar
              </button>
            </div>

            <ButtonCart />
            {status === '' ? <DigiteTermo /> : ''}
            {status !== '' && status !== 'OK' ? <ProductNotFound /> : ''}
          </header>
        </div>
        {status === 'OK' ? (
          <CardsRenderList products={products} termo={searchText} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Home;
